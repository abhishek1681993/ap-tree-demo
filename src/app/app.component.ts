import { Component, OnInit } from '@angular/core';
import treeJson  from '../assets/test-data/ap-tree.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ap-tree-demo';
  itemSource = treeJson;
  nodeCount =0;
  formValue = {
    inputValue: "TestInput"
  }
  formSubmit(event: any) {
    console.log(event)
  }
  constructor() {
    this.itemSource = this.constructItemSource(2, 6)
    // console.log(this.itemSource)
    // console.log("nodeCount", this.nodeCount)
  }
  ngOnInit(): void {
    // document.getElementById('formElement')
    document.getElementById('formElement')
      ?.addEventListener('keydown', event => {
        console.log("Event Captured", event)
        event.preventDefault();
      })
  }

  constructItemSource(level: number, noOfItemPerLevel: number): any {
    let itemSource = [];
    for (let index = 0; index < noOfItemPerLevel; index++) {
      this.nodeCount ++;
      let item = {
        data: {
          name: `Level ${level} - ${index}`,
          _isChecked: true,
          _imagePath: 'assets/icons/icon_e.png'
        },
        config: {
          hasChildren: level > 0,
          showCheckbox: true,
          showImage: true,
          hasPendingChildren: false
        },
        children: level > 0 ? this.constructItemSource(level -1, noOfItemPerLevel): null
      }
      itemSource.push(item)
    }

    return itemSource;
  }

  onClickHandler(event: any) {
    console.log("Click Handler", event);
  }

  onRightClickHandler(event: any) {
    console.log("Right Click Handler", event);
  }

  onFormatItemHandler(event: any) {
    // console.log("Format Item Handler", event);
    event._node.element.nativeElement.innerHTML = `<b>New Level ${event._node.level} Old Name: ( ${event._node.dataItem.name} )</b>`
  }
}
