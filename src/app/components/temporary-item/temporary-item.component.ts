import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/ItemService';

@Component({
  selector: 'app-temporary-item',
  templateUrl: './temporary-item.component.html',
  styleUrls: ['./temporary-item.component.css']
})
export class TemporaryItemComponent implements OnInit {

public item: Item;

  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit() {
      
    let itemNumber = Number(sessionStorage.getItem("itemNumber"));
    let observable = this.itemsService.getItem(itemNumber);

        observable.subscribe(item => {
        this.item = item;
    }, ErrorBean => { 
        alert("Error! Status: " + ErrorBean.status + ", Message: " + ErrorBean.message);
        this.router.navigate(["/home"]);
    });
  }

  public getItemById() {
}

public editItem(item: Item){
}

public deleteItem(){
    let itemNumber = Number(sessionStorage.getItem("itemNumber"));
    let observable = this.itemsService.deleteItem(itemNumber);

    observable.subscribe(observer => {
    }, ErrorBean => { 
        alert("Error! Status: " + ErrorBean.status + ", Message: " + ErrorBean.message);
    });
    
    this.router.navigate(["/home"]);
}

public updateAmount(item: Item){
    sessionStorage.setItem("itemNumber", item.itemNumber.toString());
    this.router.navigate(["/updateAmount"]);
}

}
