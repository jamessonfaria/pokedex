import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { MyNumberPipe } from './../../pipes/my-number.pipe';
import { ListComponent } from './views/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { InformationComponent } from './views/information/information.component';


const CompList = [
  ListItemComponent,
  ListComponent,
  InformationComponent
];

@NgModule({
  declarations: [
    ...CompList,
    MyNumberPipe
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    FormsModule
  ],
  exports: [
    ...CompList
  ]
})
export class PokedexModule { }
