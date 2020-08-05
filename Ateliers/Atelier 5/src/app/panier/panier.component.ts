import { Component, OnInit } from '@angular/core';

import { PanierService } from '../panier.service';
import { FormBuilder } from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  viderPanier;
  achats;
  somme=0;
  verifierForm;
  constructor(private panierService: PanierService,private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.achats = this.panierService.getAchats();
    this.verifierForm = this.formBuilder.group({
      nom : '',
      adresse : ''
    });
    
  }
  onSubmit(verifierForm){
    window.alert('nom : '+verifierForm.nom+' Adresse : '+verifierForm.adresse);
    this.panierService.viderPanier();
    this.verifierForm.reset()
  }
  Somme(){
   this.achats.forEach(element => {
     this.somme += element.prix;
   });
   
    /*for(var i in this.achats){
      this.somme += i;
   }*/

  }
}
