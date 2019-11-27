import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { MenuComponent } from '../components/menu/menu.component';
import { MainComponent } from '../components/main/main.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AddItemComponent } from '../components/add-item/add-item.component';
import { GetItemComponent } from '../components/get-item/get-item.component';
import { TemporaryItemComponent } from '../components/temporary-item/temporary-item.component';
import { UpdateAmountComponent } from '../components/update-amount/update-amount.component';
import { HeaderComponent } from '../components/header/header.component';
import { RoutingModule } from './app-routing.module';
import { ItemsService } from '../services/ItemService';



@NgModule({
  declarations: [
  LayoutComponent,
  MenuComponent,
  MainComponent,
  HeaderComponent,
  FooterComponent,
  AddItemComponent,
  GetItemComponent,
  TemporaryItemComponent,
  UpdateAmountComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule, RoutingModule,
    HttpClientModule,
  ],
  providers: [ItemsService],
  bootstrap: [LayoutComponent],
})
export class AppModule { }
