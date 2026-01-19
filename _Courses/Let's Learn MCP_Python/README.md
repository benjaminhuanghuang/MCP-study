# Let's Learn MCP: Python

By Marlene and Gwen

[video](https://www.youtube.com/watch?v=qQZFvz4BTCY)

[video CN](https://www.bilibili.com/video/BV1ZpuXzSEJw/)

[code](https://github.com/marlenezw/LETSLEARNMCP-PYTHON)

## Agenda

1. What is MCP? How does it work? How do you use it?
2. In-depth overview of MCP features
3. Building an MCP server in Python

Agentic coding

MCP is an open protocol that standardizes how applications provide context to LLMs.

- Created by Anthropic
- Adopted by the Al community
- Evolving Together

Parts of MCP

- Host: the environment or the tools, like VS Code
- Clients: the tools used to interact with server, like Copalite
- Servers: provide the functionality or tools, like AWS

## Setup

```sh
python -m venv mcp-env

source mcp-env/bin/activate

pip install uv
pip install MCP
```

MCP Configuration

- 1. Create an .vscode folder in the project directory
- 2. Create an "mcp.json" inside ".vscode"
- 3. Add the following configuration:

```json
{
  "inputs": [],
  "servers": {
    "learnpython-mcp": {
      "command": "/Users/BenjaminHuang/ben-git/AI-study/Agent-MCP/Let's Learn MCP_Python/mcp-env/bin/uv",
      "args": ["--directory", ".", "run", "prompts_server.py"]
    }
  }
}
```
