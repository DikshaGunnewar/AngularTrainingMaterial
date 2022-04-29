import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aquaman',
  template: `
    <h1>
    Aaquaman Component!
    </h1>
    <h2>Quantity: -{{assignesQuantity}}</h2>
  `,
  styles: [
  ]
})
export class AquamanComponent implements OnInit {
  assignesQuantity= 0;
  constructor(private ar: ActivatedRoute) { }

  ngOnInit(): void {
    //this.assignesQuantity = this.ar.params['qty'];
  }

}
