import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "my-first-mcp",
  version: "1.0.0",
});

server.registerTool(
  "add-numbers",
  {
    description: "A tool that adds two numbers",
    inputSchema: z.object({
      a: z.number().describe("The first number to add"),
      b: z.number().describe("The second number to add"),
    }),
    outputSchema: z.object({
      sum: z.number().describe("The sum of the two numbers"),
    }),
  },
  async ({ a, b }: { a: number; b: number }) => {
    return {
      content: [
        {
          type: "text",
          text: `The sum of ${a} and ${b} is ${a + b}`,
        },
      ],
      structuredContent: {
        sum: a + b,
      },
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Error starting MCP server:", error);
  process.exit(1);
});
