import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from '../components/main/main.component'
import { AddItemComponent } from '../components/add-item/add-item.component';
import { GetItemComponent } from '../components/get-item/get-item.component';
import { TemporaryItemComponent } from '../components/temporary-item/temporary-item.component';
import { UpdateAmountComponent } from '../components/update-amount/update-amount.component';

const routes: Routes = [
    { path: "home", component: MainComponent },
    { path: "addItem", component:  AddItemComponent},
    { path: "getItemById", component: GetItemComponent},
    {path: "", redirectTo: "home", pathMatch: "full" }, 
    {path: "temporaryItem",  component: TemporaryItemComponent}, 
    {path: "updateAmount",  component: UpdateAmountComponent}, 

]
@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(routes) 
  ]
  })
export class RoutingModule {

 }
