import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  achats =[];

  constructor() { }
  ajouterAuPanier(produit){

    this.achats.push(produit);
  }
  getAchats(){
    return this.achats;
  }
  viderPanier(){
    this.achats=[];
    return this.achats;
  }
}
