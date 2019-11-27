import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/ItemService';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
    public item: Item;

    constructor(private itemService: ItemsService, private router: Router) {
        this.item = new Item();
    }   

    public addItem(): void{
        const observable = this.itemService.addItem(this.item);

        observable.subscribe(observer => {
            this.router.navigate(["/home"]);
        }, ErrorBean => { 
            alert("Error! Status: " + ErrorBean.status + ", Message: " + ErrorBean.message);
        });
    }

  ngOnInit() {
  }

}
