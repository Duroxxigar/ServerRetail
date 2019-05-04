import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  serverPricing = [
    {
      name: 'East US',
      price: 79.99,
      storage: '1 TB'
    },
    {
      name: 'West US',
      price: 79.99,
      storage: '1 TB'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
