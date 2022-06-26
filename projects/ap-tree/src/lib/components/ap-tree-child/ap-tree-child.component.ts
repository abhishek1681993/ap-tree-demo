import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApTreeNode } from '../../interface/global.interface';

@Component({
    selector: 'ap-tree-child',
    templateUrl: 'ap-tree-child.component.html',
    styleUrls: ['ap-tree-child.component.scss']
})

export class ApTreeChildComponent implements OnInit {
    private _apTreeNode: ApTreeNode | null = null;
    @Output() public onRightClick: EventEmitter<any> = new EventEmitter();
    @Output() public onClick: EventEmitter<any> = new EventEmitter();
    public isChildHidden = true;
    public hasChildren = false;

    @Input()
    public set apTreeNode(v : ApTreeNode | null) {
        this._apTreeNode = v;
        if(v?.config?.hasPendingChildren) {
            this.hasChildren = true;
        } else if(v?.children?.length && v?.children?.length > 0) {
            this.hasChildren = true;
        } else {
            this.hasChildren = false;
        }
    }
    
    public get apTreeNode() : ApTreeNode | null {
        return this._apTreeNode;
    }
        
    constructor() { }

    ngOnInit() { }

    onClickHandler(event: any, treeNode: ApTreeNode) {
        this.isChildHidden = !this.isChildHidden;
        this.onClick.emit({event, treeNode});
    }

    onRightClickHandler(event: any, treeNode: ApTreeNode) {
        event.preventDefault();
        this.onRightClick.emit({event, treeNode})
    }
}