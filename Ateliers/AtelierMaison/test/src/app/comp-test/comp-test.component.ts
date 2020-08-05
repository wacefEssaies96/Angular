import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from '../panier.service';
import { liste } from '../liste';
@Component({
  selector: 'app-comp-test',
  templateUrl: './comp-test.component.html',
  styleUrls: ['./comp-test.component.css']
})
export class CompTestComponent implements OnInit {
  l = liste;
  ll;
  constructor() { }

  ngOnInit() {
   // this.route.paramMap.subscribe(params=>{this.ll = liste[+params.get('Id')];})
  }

  click(){
    window.alert("why you click me ?! get out of here");
  }
  onNotify(){
    window.alert("test");
  }

}
