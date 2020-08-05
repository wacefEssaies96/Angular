import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  achats =[];
  livraison;

  constructor(private http: HttpClient) { }
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
  getFraisLivraison(){
    return this.http.get('assets/livraison.json');
  }
}
