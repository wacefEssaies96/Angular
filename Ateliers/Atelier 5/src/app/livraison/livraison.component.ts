import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  fraisLivraison;
  constructor(private panierServ: PanierService) { }

  ngOnInit() {
    this.fraisLivraison = this.panierServ.getFraisLivraison();
  }

}
