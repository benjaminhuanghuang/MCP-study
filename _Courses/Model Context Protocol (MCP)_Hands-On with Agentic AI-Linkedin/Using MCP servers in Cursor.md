# Using MCP servers in Cursor

Cursor -> Settings -> Tools & Integrations -> New MCP Server

It will create /Users/BenjaminHuang/.cursor/mcp.json

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"],
      "type": "stdio"
    },
    "ProjectDocumenter": {
        "command": "node",
        "args": [
        "/Users/mrh/Documents/courses/ASI/MCP/mcp-playground/ProjectDocumenter/dist/index.js"
        ]
    }
  }
}
```

Rules <https://docs.cursor.com/context/rules>
