# MCP list

## Firecrawl MCP

```json
"firecrawl-mcp": {
"command": "прх",
"args": ["-y", "firecrawl-mcp"],
"env": {
    "FIRECRAWL_API_KEY": ""
    }
}
```

- sample

```md
scrape the top 10 trending news from HackerNews
```

## context 7

```json

"context7": {
"command" : "npx",
"args": ["-y", "@upstash/context7-mcp"]
}
```

- sample

```md
gemini
install tailwind css to this nextjs project use context7
```

## Task Master

```json
"taskmaster-ai": {
    "command": "npx",
    "args": ["-y", "--package=task-master-ai", "task-master-ai"],
    "env" : {
        "ANTHROPIC_API_KEY" : "sk-ant-",
        "OPENAI_API_KEY": "sk-proj-",
        "GOOGLE_API_KEY": "sk-proj-"
    }
}

```

- sample

```md
开发一款 todo list app on IOS, 使用task master 生成 prd 文件并拆解成10个sub tasks
```
