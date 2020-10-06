import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';


@NgModule({
  declarations: [ElementsHomeComponent, PlaceHolderComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports :[
  ]
})
export class ElementsModule { }
