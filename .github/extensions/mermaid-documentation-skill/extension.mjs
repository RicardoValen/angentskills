// Extension: mermaid-documentation-skill
// Scaffold a canvas extension that provides Mermaid diagram documentation support and rendering.
//
// This single-file skeleton is a starting point. For more complex canvases
// (multiple actions with non-trivial logic, shared state, a custom renderer,
// etc.) prefer splitting things out: move each action handler into its own
// function, extract `open`/`onClose` into helpers, and pull large units
// (renderer assets, schema definitions, shared utilities) into sibling files
// imported from this entry point. Keep extension.mjs focused on wiring.

import { createServer } from "node:http";
import fs from "node:fs";
import path from "node:path";
import { joinSession, createCanvas } from "@github/copilot-sdk/extension";

// One local HTTP server per open canvas instance. Each instance gets its own
// ephemeral port so multiple canvases (or multiple opens of the same canvas)
// don't collide. Replace this with your real renderer — point a static-file
// server, a Vite/Next dev server, or any framework you like at the same URL.
const servers = new Map();

function renderHtml(instanceId) {
    const docsDir = path.join(process.cwd(), '.github', 'extensions', 'mermaid-documentation-skill', 'docs');
    let readme = 'README not found', skill = 'Skill not found', execLoop = 'ExecutionLoop not found';
    try {
        readme = fs.readFileSync(path.join(docsDir, 'README.md'), 'utf8');
        skill = fs.readFileSync(path.join(docsDir, 'Skill.md'), 'utf8');
        execLoop = fs.readFileSync(path.join(docsDir, 'ExecutionLoop.md'), 'utf8');
    } catch (e) {
        // ignore and fall back to not found messages
    }

    return `<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>mermaid-documentation-skill</title>
  <link rel="stylesheet" href="https://unpkg.com/github-markdown-css@5.1.0/github-markdown.css">
  <style>body{font-family:system-ui;padding:1rem} .md{max-width:900px;margin:0 auto}</style>
</head>
<body>
  <h1>mermaid-documentation-skill</h1>
  <p>Instance: <code>${instanceId}</code></p>
  <nav style="margin-bottom:1rem;">
    <button onclick="show('readme')">README</button>
    <button onclick="show('skill')">Skill</button>
    <button onclick="show('exec')">Execution Loop</button>
  </nav>
  <main class="md markdown-body" id="content"></main>

  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
  <script>
    mermaid.initialize({ startOnLoad: false });
    const docs = {
      readme: ${JSON.stringify(readme)},
      skill: ${JSON.stringify(skill)},
      exec: ${JSON.stringify(execLoop)}
    };
    function render(md) {
      const html = marked.parse(md || '');
      document.getElementById('content').innerHTML = html;
      mermaid.init(undefined, document.querySelectorAll('.language-mermaid, .mermaid'));
    }
    function show(key) { render(docs[key]); }
    show('readme');
  </script>
</body>
</html>`;
}

async function startServer(instanceId) {
    const server = createServer((req, res) => {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(renderHtml(instanceId));
    });
    // Port 0 = let the OS pick a free ephemeral port. Bind to loopback only.
    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
    const address = server.address();
    const port = typeof address === "object" && address ? address.port : 0;
    return { server, url: `http://127.0.0.1:${port}/` };
}

const session = await joinSession({
    canvases: [
        createCanvas({
            id: "mermaid-documentation-skill",
            displayName: "mermaid-documentation-skill",
            description: "Example canvas - replace with your implementation",
            // Optional JSON Schema describing the input passed to open():
            // inputSchema: { type: "object", properties: {} },
            actions: [
                {
                    name: "example_action",
                    description: "Example agent-callable action on this canvas",
                    // Optional JSON Schema for the action input:
                    // inputSchema: { type: "object", properties: {} },
                    handler: async (ctx) => {
                        return { ok: true, instanceId: ctx.instanceId };
                    },
                },
            ],
            // Called when the agent or host opens the canvas. We boot a local
            // HTTP server on an ephemeral port and hand its URL back to the
            // host so it can render the canvas. Re-opens with the same
            // instanceId reuse the existing server.
            open: async (ctx) => {
                let entry = servers.get(ctx.instanceId);
                if (!entry) {
                    entry = await startServer(ctx.instanceId);
                    servers.set(ctx.instanceId, entry);
                }
                return {
                    title: "mermaid-documentation-skill",
                    url: entry.url,
                };
            },
            // Tear the per-instance server down when the canvas is closed so
            // ports are not leaked across the lifetime of the extension.
            onClose: async (ctx) => {
                const entry = servers.get(ctx.instanceId);
                if (entry) {
                    servers.delete(ctx.instanceId);
                    await new Promise((resolve) => entry.server.close(() => resolve()));
                }
            },
        }),
    ],
});
