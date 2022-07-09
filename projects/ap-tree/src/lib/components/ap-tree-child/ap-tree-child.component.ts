import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ApFormatNodeEventArgument } from '../../baseClasses/ap-tree-node';
import { ApTreeView } from '../../baseClasses/ap-tree-view';
import { ApTreeNode } from '../../interface/ap-tree-node.interface';
import { ApTreeData, ApTreeNodeConfig } from '../../interface/global.interface';

@Component({
    selector: 'ap-tree-child',
    templateUrl: 'ap-tree-child.component.html',
    styleUrls: ['ap-tree-child.component.scss']
})

export class ApTreeChildComponent implements OnInit, AfterViewInit, ApTreeNode {
    private _apTreeNode: ApTreeData | null = null;
    public _displayMemberPath: string;
    public _displayMemberPath_child: string | string[];
    public isChildHidden = true;
    public hasChildren = false;

    // Events 
    @Output() public onRightClick: EventEmitter<any> = new EventEmitter();
    @Output() public onClick: EventEmitter<any> = new EventEmitter();
    @Output() public onFormatItem: EventEmitter<ApFormatNodeEventArgument> = new EventEmitter()
    
    @ViewChild('apTreeChildElement', {static: false}) element: HTMLElement;
    // Input
    @Input() level: number;

    @Input() 
    public set displayMemberPath(v: string | string[]) { // If different level has different displayMemberPath then array
        this.setDisplayMemberPath(v);
    }
    @Input()
    public set apTreeNode(v : ApTreeData | null) {
        this.setApTreeNode(v);
    }
    
    public get apTreeNode() : ApTreeData | null {
        return this._apTreeNode;
    }
        
    constructor() { }
    ngAfterViewInit(): void {
        this.onFormatItemHandler();
    }
    dataItem: any;
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
    config?: ApTreeNodeConfig | undefined;
    children?: ApTreeData[] | undefined;

    ngOnInit() {
        
    }

    // Event Handler
    onClick_Child(event: any) {
        this.onClick.emit(event);
    }
    onRightClick_Child(event: any) {
        this.onRightClick.emit(event);
    }
    onformatItem_Child(event: any) {
        this.onFormatItem.emit(event);
    }

    // Event Emitter
    onClickHandler(event: any, treeNode: ApTreeData) {
        this.isChildHidden = !this.isChildHidden;
        this.onClick.emit({event, treeNode});
    }

    onRightClickHandler(event: any, treeNode: ApTreeData) {
        event.preventDefault();
        this.onRightClick.emit({event, treeNode})
    }

    onFormatItemHandler() {
        let apFormatNodeEventArgument: ApFormatNodeEventArgument = new ApFormatNodeEventArgument(this.dataItem, this.element, this.level)
        this.onFormatItem.emit(apFormatNodeEventArgument)
    }

    // Private methods

    // Setter getter handler
    private setDisplayMemberPath(v: string | string[]): void {
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

    private setApTreeNode(v : ApTreeData | null): void {
        this._apTreeNode = v;
        this.dataItem = v?.data;
        if(v?.config?.hasPendingChildren) {
            this.hasChildren = true;
        } else if(v?.children?.length && v?.children?.length > 0) {
            this.hasChildren = true;
        } else {
            this.hasChildren = false;
        }
    }

}