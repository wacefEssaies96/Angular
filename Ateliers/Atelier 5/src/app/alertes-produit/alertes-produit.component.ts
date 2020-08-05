import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alertes-produit',
  templateUrl: './alertes-produit.component.html',
  styleUrls: ['./alertes-produit.component.css']
})
export class AlertesProduitComponent implements OnInit {

  @Input() produit;
  @Output() alerte = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
