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

server.registerTool(
  "get_github_repos",
  {
    description: "Get github repos from the user name",
    inputSchema: z.object({
      username: z.string().describe("The GitHub username"),
    }),
    outputSchema: z.object({
      repos: z.array(z.string()).describe("List of GitHub repositories"),
    }),
  },
  async ({ username }: { username: string }) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: { "User-Agent": "MCP-Server" },
    });

    if (!res.ok) throw new Error("Github API error!");

    const repos = await res.json();

    const repoList = repos
      .map((repo: any, i: number) => `${i + 1}. ${repo.name}`)
      .join("\n\n");

    const repoNames = (Array.isArray(repos) ? repos : [])
      .map((repo: any) => repo?.name)
      .filter((name: any) => typeof name === "string");

    return {
      content: [
        {
          type: "text",
          text: `Github repositories for ${username}: (${repoNames.length})`,
        },
        {
          type: "text",
          text: repoList,
        },
      ],
      structuredContent: {
        repos: repoNames,
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
