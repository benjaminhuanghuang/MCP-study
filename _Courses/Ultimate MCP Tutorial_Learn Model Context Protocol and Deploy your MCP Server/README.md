# Ultimate MCP Tutorial | Learn Model Context Protocol and Deploy your MCP Server

https://www.youtube.com/watch?v=DAuZuj0BUZA

Based on user's prompt, it will figure out what tools need to run

Resources: share data
Tools: interact with external systems
Prompts: create reusable prompt templates

https://modelcontextprotocol.io/docs/develop/build-server

```sh
npm i @modelcontextprotocol/sdk zod
npm i -D @types/node typescript
```

Run MCP

```sh
npx @modelcontextprotocol/inspector
```

Add MCP to vs code or cursor

```json
{
  "mcpServers": {
    "my-first-mcp": {
      "command": "node",
      "args": ["/my-first-mcp/build/index.js"]
    }
  }
}
```

## Remote MCP

```sh
npm create cloudflare@latest -- --template=cloudflare/ai/demos/remote-mcp-authless
```
