import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApTreeComponent } from './ap-tree.component';
import { ApTreeChildComponent } from './components/ap-tree-child/ap-tree-child.component';



@NgModule({
  declarations: [
    ApTreeComponent,
    ApTreeChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ApTreeComponent
  ]
})
export class ApTreeModule { }
