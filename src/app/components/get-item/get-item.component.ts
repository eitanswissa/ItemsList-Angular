import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/ItemService';

@Component({
  selector: 'app-get-item',
  templateUrl: './get-item.component.html',
  styleUrls: ['./get-item.component.css']
})
export class GetItemComponent implements OnInit {

    public item: Item;
    public itemNumber: string;

    constructor(private itemsService: ItemsService, private router: Router) { }

    ngOnInit() {
        
    }
    
    getItemById(itemNumber: any){
        sessionStorage.setItem("itemNumber", itemNumber);
        this.router.navigate(["/temporaryItem"]);
    }

}
