# MCP Tutorial: Build Your First MCP Server and Client from Scratch

https://www.youtube.com/watch?v=RhTiAOGwbYE

LLMs can only respond back with a generated text or other supported formats. It can't perform any action.

An AI agent can interact with third party tools, have its own memory and interact with an LLM and go back and forth until it has uh completed the task

A simplified AI Agent

```py
# Step 1: Read input from user
user_input = input("Where do you want to fly?\n")

# Step 2: Extract flight details using LLM
prompt = [
    {"role": "system", "content": "Extract origin, destination, and date."},
    {"role": "user", "content": user_input}
]
flight_query = call_llm(prompt)

# Step 3: Fetch flight options from airlines (mocked inline)
flight_options = fetch_flight_details()

# Step 4: Fetch user preferences from memory (mocked)
user_prefs = fetch_user_preferences()

# Step 5: Ask LLM to pick the best flight
decision_prompt = [
    {"role": "system", "content": f"User preferences: {user_prefs}"},
    {"role": "user", "content": f"Available flights: {flight_options}"}
]
decision = call_llm(decision_prompt)

# Step 6: Book the selected flight (mocked)
def book_flight(flight): return f"Flight {flight['flight']} on {flight['airline']} booked!"

print(book_flight({"flight": "AG303", "airline": "AeroGo"}))  # Assume LLM chose AeroGo
```

In step 3, Agent interact with other platform using `tools`

```py
# Agent call tool for each airline
def fetch_flight_details():
    flights = []

    # Tool call: Joyair
    joyair_result = call_tool("joyair_tool", {
        origin, destination, date
    })
    flights.append(joyair_result)

    # Tool call: Dracair
    dracair_result = call_tool("dracair_tool", {
        origin, destination, date
    })
    flights.append(dracair_result)

    # Tool call: AeroGo
    aerogo_result = call_tool("aerogo_tool", {
        origin, destination, date
    })
    flights.append(aerogo_result)

    return flights
```

The pseudo code of `call_tool` shows the problem: too many different APIs need to be handled. This is where the Model Context Protocol (MCP) becomes essential—it standardizes how agents interact with tools, eliminating the need for custom integration logic for each API.

```py
def call_tool(tool_name, args):
    if tool_name == "joyair_tool":
        response = call_api("https://www.joyair.com/api/flights", args)
        return [
            {
                "flightNumber": flight["flightNumber"],
                "origin": flight["origin"],
                "destination": flight["destination"]
            } for flight in response["flights"]
        ]

    elif tool_name == "dracair_tool":
        response = call_api("https://www.dracair.com/api/flights-list", args)
        return [
            {
                "flightNumber": flight["flightNum"],
                "origin": flight["from"],
                "destination": flight["to"]
            } for flight in response["flight-info"]
        ]

    elif tool_name == "aerogo_tool":
        response = call_api("https://www.aerogo.com/api/list-flights", args)
        return [
            {
                "flightNumber": flight["flight"],
                "origin": flight["start"],
                "destination": flight["finish"]
            } for flight in response["detail-flights"]
        ]

    else:
        raise ValueError("Unknown tool")
```

Agents use MCP client to interact with serer

## MCP

Clients may offer the following features to servers:

- Sampling: Server-initiated agentic behaviors and recursive LLM interactions
- Roots: Server-initiated inquiries into uri or filesystem boundaries to operate in
- Elicitation: Server-initiated requests for additional information from users

Servers offer any of the following features to clients:

- Resources: Context and data, for the user or the AI model to use
- Prompts: Templated messages and workflows for users
- Tools: Functions for the AI model to execute
