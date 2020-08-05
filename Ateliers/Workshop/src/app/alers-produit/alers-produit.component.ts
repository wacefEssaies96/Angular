import { Component, OnInit ,Input ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alers-produit',
  templateUrl: './alers-produit.component.html',
  styleUrls: ['./alers-produit.component.css']
})
export class AlersProduitComponent implements OnInit {

  @Input() produit;
  
  @Output() alerte= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
