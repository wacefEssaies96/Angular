import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  tab=[];
  constructor() { }
  ajouterAuPanier(ll){
    this.tab.push(ll);
  }
}
