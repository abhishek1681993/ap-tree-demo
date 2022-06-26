import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApTreeNode } from './interface/global.interface';

@Component({
  selector: 'ap-tree',
  templateUrl: 'ap-tree.component.html',
  styles: [
  ]
})
export class ApTreeComponent implements OnInit {
  @Output() public onRightClick: EventEmitter<any> = new EventEmitter();
  @Output() public onClick: EventEmitter<any> = new EventEmitter();
  
  public get itemSource() :  Array<ApTreeNode> {
    return this._itemSource;
  }
  
  @Input()
  public set itemSource(v : Array<ApTreeNode>) {
    this._itemSource = v;
  }
  
  private _itemSource: Array<ApTreeNode> = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickHandler(event: any) {
    this.onClick.emit(event);
  }

  onRightClickHandler(event: any) {
    this.onRightClick.emit(event);
  }
}
