import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';


@Injectable({
    providedIn: 'root'
})
export class ItemsService {
 
    constructor(private http: HttpClient) {}

    public addItem(item: Item): Observable<void> {
        return this.http.post<void>("http://localhost:8080/items", item);
    }

    public deleteItem(itemNumber: number): Observable<void> {
        return this.http.delete<void>("http://localhost:8080/items/" + itemNumber);
    }

    public getAllItems(): Observable<Item[]> {
        return this.http.get<Item[]>("http://localhost:8080/items");
    }

    public getItem(itemNumber: number): Observable<Item>{
        return this.http.get<Item>("http://localhost:8080/items/" + itemNumber);
    }

    public deposit(itemNumber: number, amount: string): Observable<void> { 
        let depositUrl = "http://localhost:8080/items/deposit/" + itemNumber + "?amount=" + amount;
        return this.http.put<void>(depositUrl, null);
    }

    public withdraw(itemNumber: number, amount: number): Observable<void> {
        let withdrawUrl = "http://localhost:8080/items/withdraw/" +itemNumber + "?amount=" + amount;
        return this.http.put<void>(withdrawUrl, null);
    }
}
