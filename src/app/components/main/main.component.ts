import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/Item';
import { ItemsService } from 'src/app/services/ItemService';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    public items: Item[];
    public currentItem: Item;

    constructor(private itemsService: ItemsService, private router: Router) { }

    ngOnInit() {
        this.getAllItems();
    }



    public getAllItems() {
        let observable = this.itemsService.getAllItems();
        observable.subscribe(items => {
            this.items = items;
        }, ErrorBean => { 
            alert("Error! Status: " + ErrorBean.status + ", Message: " + ErrorBean.message);
        });
    }
    
    public deleteItem(currentItem: Item){
        let observable = this.itemsService.deleteItem(currentItem.itemNumber);
        observable.subscribe(observer => {
            window.location.reload();
        }, ErrorBean => { 
            alert("Error! Status: " + ErrorBean.status + ", Message: " + ErrorBean.message);
        });
    }

    public updateAmount(item: Item){
        sessionStorage.setItem("itemNumber", item.itemNumber.toString());
        this.router.navigate(["/updateAmount"]);
    }
    
}
