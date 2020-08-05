import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { produits } from '../produits';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {

  produit;

  constructor(
    private route: ActivatedRoute,
    private panierService: PanierService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.produit = produits[+params.get('produitId')];
    });
  }

  acheterProduit(produit) {
    window.alert('Produit ajouté au panier');
    this.panierService.ajouterAuPanier(produit);
  }

}
