import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";  

import { produits } from '../produits';
import { PanierService } from "../panier.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit{
  Produits = produits;

  produit;
  constructor(private route :ActivatedRoute,private panierService : PanierService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.produit=produits[+params.get('produitId')];
    })
  }

  onNotify(){
    window.alert('Vous serez alertés dès que ce produit sera en promotion');
  }

  acheterProduit(produit){
    window.alert('Produit ajouter au panier');
    this.panierService.ajouterAuPanier(produit);
  }
  share(){
    window.alert('Le produit a été partagé!');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

