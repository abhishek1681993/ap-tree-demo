import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApTreeNode } from '../../interface/ap-tree-node.interface';
import { ApTreeData, ApTreeNodeConfig, ApTreeView } from '../../interface/global.interface';

@Component({
    selector: 'ap-tree-child',
    templateUrl: 'ap-tree-child.component.html',
    styleUrls: ['ap-tree-child.component.scss']
})

export class ApTreeChildComponent implements OnInit, ApTreeNode {
    private _apTreeNode: ApTreeData | null = null;
    public _displayMemberPath: string;
    public _displayMemberPath_child: string | string[];
    @Output() public onRightClick: EventEmitter<any> = new EventEmitter();
    @Output() public onClick: EventEmitter<any> = new EventEmitter();
    public isChildHidden = true;
    public hasChildren = false;

    @Input() 
    public set displayMemberPath(v: string | string[]) { // If different level has different displayMemberPath then array
        if(Array.isArray(v)) {
            if(v.length > 0) {
                this._displayMemberPath = v[0];
                v.splice(0, 1);
                this._displayMemberPath_child = v;
            } else {
                this._displayMemberPath = 'name';
                this._displayMemberPath_child = 'name';
            }
        } else {
            this._displayMemberPath = v || 'name';
            this._displayMemberPath_child = v || 'name';
        }
    }
    @Input() level: number;
    @Input()
    public set apTreeNode(v : ApTreeData | null) {
        this._apTreeNode = v;
        if(v?.config?.hasPendingChildren) {
            this.hasChildren = true;
        } else if(v?.children?.length && v?.children?.length > 0) {
            this.hasChildren = true;
        } else {
            this.hasChildren = false;
        }
    }
    
    public get apTreeNode() : ApTreeData | null {
        return this._apTreeNode;
    }
        
    constructor() { }
    index: number;
    isChecked: boolean;
    isCollapsed: boolean;
    isDisabled: boolean;
    itemsSource: any[];
    nodes: ApTreeNode[] | null;
    parentNode: ApTreeNode;
    treeView: ApTreeView;
    addChildNode: (index: number, dataItem: any) => ApTreeNode;
    ensureVisible: () => void;
    data: any;
    config?: ApTreeNodeConfig | undefined;
    children?: ApTreeData[] | undefined;

    ngOnInit() { }

    onClickHandler(event: any, treeNode: ApTreeData) {
        this.isChildHidden = !this.isChildHidden;
        this.onClick.emit({event, treeNode});
    }

    onRightClickHandler(event: any, treeNode: ApTreeData) {
        event.preventDefault();
        this.onRightClick.emit({event, treeNode})
    }
}