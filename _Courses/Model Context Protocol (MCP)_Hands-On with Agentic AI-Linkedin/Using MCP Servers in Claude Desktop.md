# Using MCP Servers in Claude Desktop

```sh
brew install uv # macOS
winget install --id=astral-sh.uv  -e # windows

```

Adding the fetch MCP server to Claude Desktop

macOS:
~/Library/Application Support/Claude/claude_desktop_config.json

Windows:
%APPDATA%\Claude\claude_desktop_config.json

- Open Claude Desktop
- Go to the application menu and select "Settings"
- In the Settings panel, select "Developer" in the sidebar
- Click the "Edit Config" button
- Open claude_desktop_config.json in your preferred code editor

```json
{
    "mcpServers": {
        "fetch": {
            "command": "uvx",
            "args": [
                "mcp-server-fetch"
            ]
        },
         "weather": {
            "command": "/Users/your-username/.local/bin/uv",
            "args": [
                "run",
                "--with",
                "mcp[cli]",
                "mcp",
                "run",
                "/Users/your-username/path/to/open-meteo-weather/server.py"
            ]
        }
    }
}
```
