import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApTreeData } from './interface/global.interface';

@Component({
  selector: 'ap-tree',
  templateUrl: 'ap-tree.component.html',
  styles: [
  ]
})
export class ApTreeComponent implements OnInit {
  @Output() public onRightClick: EventEmitter<any> = new EventEmitter();
  @Output() public onClick: EventEmitter<any> = new EventEmitter();
  
  public get itemSource() :  Array<ApTreeData> {
    return this._itemSource;
  }
  
  @Input()
  public set itemSource(v : Array<ApTreeData>) {
    this._itemSource = v;
  }
  // Done
  @Input() displayMemberPath: string | string[]; // If different level has different displayMemberPath then array

  // ToDO
  @Input() allowDraging: boolean;
  @Input() expandOnLoad: boolean;
  @Input() hostElement: HTMLElement;
  @Input() imageMemberPath: string | string[];

  @Input() lazyLoadFunction: (node: ApTreeData, callback: Function) => void
  
  private _itemSource: Array<ApTreeData> = [];

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
