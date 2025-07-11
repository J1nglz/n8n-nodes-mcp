import { ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class McpClientHttpApi implements ICredentialType {
    name: string;
    displayName: string;
    icon: "file:mcpClient.svg";
    properties: INodeProperties[];
}
