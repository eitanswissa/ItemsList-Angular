import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/ItemService';

@Component({
  selector: 'app-update-amount',
  templateUrl: './update-amount.component.html',
  styleUrls: ['./update-amount.component.css']
})
export class UpdateAmountComponent implements OnInit {

    public addAmount: number; 
    public removeAmount: number; 

  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit() {
  }

  public deposit(addAmount: any){
    let itemNumber = Number(sessionStorage.getItem("itemNumber"));
    let observable = this.itemsService.deposit(itemNumber, addAmount);

    observable.subscribe(observer => {
        alert('success');
    }, ErrorBean => { 
        alert("Error! Status: " + ErrorBean.status + ", Message: " + ErrorBean.message);
    });

    this.router.navigate([""]);

  }


public withdraw(removeAmount: any){
    let itemNumber = Number(sessionStorage.getItem("itemNumber"));
    let observable = this.itemsService.withdraw(itemNumber, removeAmount);

    observable.subscribe(observer => {
        alert('success');
    }, ErrorBean => { 
        alert("Error! Status: " + ErrorBean.status + ", Message: " + ErrorBean.message);
    });

    this.router.navigate([""]);

    }

}
