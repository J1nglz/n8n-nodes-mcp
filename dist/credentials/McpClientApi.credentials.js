"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.McpClientApi = void 0;
class McpClientApi {
    constructor() {
        this.name = 'mcpClientApi';
        this.displayName = 'MCP Client (STDIO) API';
        this.icon = 'file:mcpClient.svg';
        this.properties = [
            {
                displayName: 'Command',
                name: 'command',
                type: 'string',
                default: '',
                required: true,
                description: 'Command to execute (e.g., npx @modelcontextprotocol/client, python script.py)',
            },
            {
                displayName: 'Arguments',
                name: 'args',
                type: 'string',
                default: '',
                description: 'Command line arguments (space-separated). Do not include API keys or sensitive information here - use Environments instead.',
            },
            {
                displayName: 'Environments',
                name: 'environments',
                type: 'string',
                default: '',
                typeOptions: {
                    password: true,
                },
                description: 'Environment variables in NAME=VALUE format, separated by commas (e.g., BRAVE_API_KEY=xyz,OPENAI_API_KEY=abc)',
            },
        ];
    }
}
exports.McpClientApi = McpClientApi;
//# sourceMappingURL=McpClientApi.credentials.js.map