#

```sh
brew install uv  # macOS

winget install --id=astral-sh.uv  -e # window


mkdir mcp-server-weather
cd mcp-server-weather
uv init
uv venv
source .venv/bin/activate


uv add "mcp[cli]" httpx
```

## Testing and running the MCP server

```sh
mcp dev server.py
```
