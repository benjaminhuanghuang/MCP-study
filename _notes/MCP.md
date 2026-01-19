# AI Agent and  Model Context Protocol (MCP)

LLM can generate response in form of text, picture or video, but cannot tack action

Take action means the application interact with the third-party service or application

## AI Agent

• Interaction with Third-Party Platforms and gather information
• Have its own memory
• Collaboration with LLMs to process information and make decisions. They can go back and forth between these operations multiple times to accumulate enough knowledge to make a final decision and take action.
• Taking Action: book a flight

Pre-built Agents

- agents.ai

Agent tool:

- agents-n8n
- LangChain
- LangGraph

## MCP

- MCP provide AI agents with the context needed to make the correct API calls.
- Introduced by Anthropic

```json
"searchFlights": {
    "description": "Search flights from origin to destination on given date"
    "input_schema": {
        "origin": "string",
        "destination": "string",
        "date": "YYYY-MH-DD"
    }, 
    "output_schema":{
        "flights": "List of flight objects with number"
    }
}

"bookFlight": {
    "description": "Book a flight for a passenger", 
    "input_schema":{
        "flightNumber": "string",
        "passenger": {
            "firstName": "string",
            "lastName": "string",
            "email":"string"
        },
        "seatPreference": "string"
    },
}


```

Every AI agent has an MCP configuration file

```json
{
    "mcpServers": {
        "MongoDB": {
        "command": "прх",
        "args": [
        "-y"
        "mongodb-mcp-server",
        "--connectionString"
        "mongodb: //localhost:27017/myDatabase"
        ]
        }
    }
}
```

Cursor: ~/.cursor/mcp.json
windsurf: ~/.codeium/windsurf/mcp_config.json

## Agent 2 Agent Protocol

- Developed by google
- Capability Discovery
- Task Management
- Collaboration
- User Experience Negotiation

## Reference

[Model Context Protocol (MCP) Explained for Beginners: AI Flight Booking Demo!](https://www.youtube.com/watch?v=E2DEHOEbzks)
