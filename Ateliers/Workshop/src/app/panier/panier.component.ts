import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  
  achat;
  constructor(private panierService:PanierService,private root :ActivatedRoute) { }

  ngOnInit() {
    this.achat=this.panierService.getAchats();
  }

}
