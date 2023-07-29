import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApTreeComponent } from './ap-tree.component';
import { ApTreeChildComponent } from './components/ap-tree-child/ap-tree-child.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ApTreeComponent,
    ApTreeChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ApTreeComponent
  ]
})
export class ApTreeModule { }
