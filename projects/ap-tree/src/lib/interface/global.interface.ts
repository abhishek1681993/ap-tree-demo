export interface ApTreeNode {
    // [key: string]: any;
    data: any;
    config?: ApTreeNodeConfig;
    children?: Array<ApTreeNode>
}

export interface ApTreeNodeConfig {
    hasPendingChildren: boolean;
    hasChildren: boolean;
}