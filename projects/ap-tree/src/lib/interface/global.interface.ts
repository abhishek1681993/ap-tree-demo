export interface ApTreeData {
    // [key: string]: any;
    data: any;
    config?: ApTreeNodeConfig;
    children?: Array<ApTreeData>
}

export interface ApTreeNodeConfig {
    hasPendingChildren: boolean;
    hasChildren: boolean;
    showImage?: boolean;
    showCheckbox?: boolean;
}