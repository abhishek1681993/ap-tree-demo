# ApTree
## Github URL for Implementation example
https://github.com/abhishek1681993/ap-tree-demo/tree/master
Find expample in app component of above GIT repository

## Use
### import "ApTreeModule" into your module

`
import { ApTreeModule } from 'ap-tree';
`

``
@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule
  ]
})
``
### Use component selector in your template
`
<ap-tree [itemSource]="itemSource" (onClick)="onClickHandler($event)" (onRightClick)="onRightClickHandler($event)" (onFormatItem)="onFormatItemHandler($event)></ap-tree>
`
### Where itemSource
`
let itemSource: Array<ApTreeNode>;
`

`
export interface ApTreeNode {
    data: any;
    config?: ApTreeNodeConfig;
    children?: Array<ApTreeNode>
}
`

`
export interface ApTreeNodeConfig {
    hasPendingChildren: boolean;
    hasChildren: boolean;
}
`

`
onFormatItemHandler(event: any) {
    console.log("Format Item Handler", event);
    event._node.element.nativeElement.innerHTML = "Your logic to construct node"
     // You can get node data as event._node.dataItem
     // You can get node level as event._node.level
     // New Level ${event._node.level} Old Name: ( ${event._node.dataItem.name} ) 
  }
`


This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Code scaffolding

Run `ng generate component component-name --project ap-tree` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ap-tree`.
> Note: Don't forget to add `--project ap-tree` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ap-tree` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ap-tree`, go to the dist folder `cd dist/ap-tree` and run `npm publish`.

## Running unit tests

Run `ng test ap-tree` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
