import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-price',
  templateUrl: './server-price.component.html',
  styleUrls: ['./server-price.component.css']
})
export class ServerPriceComponent implements OnInit {

  @Input() serverLocation: string;
  @Input() serverStorage: string;
  @Input() serverPrice: number;

  constructor() { }

  ngOnInit() {
  }

}
