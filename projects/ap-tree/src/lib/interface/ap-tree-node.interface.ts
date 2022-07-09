import { ApTreeView } from "../baseClasses/ap-tree-view";

export interface ApTreeNode {
    level: number; // Top level 0
    index: number; // Index in parenet node
    isChecked: boolean;
    isCollapsed: boolean;
    isDisabled: boolean;
    element: HTMLElement;
    dataItem: any;
    itemsSource: Array<any>;
    nodes: Array<ApTreeNode> | null; // Array of children node return null if no children
    parentNode: ApTreeNode;
    treeView: ApTreeView;

    // Methods 
    addChildNode: (index: number, dataItem: any) => ApTreeNode
    ensureVisible: () => void
}