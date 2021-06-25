import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-chance-card',
  templateUrl: './chance-card.component.html',
  styleUrls: ['./chance-card.component.css'],
})
export class ChanceCardComponent implements OnInit {
  @Input() cardContent: any;

  constructor() {}

  ngOnInit(): void {}
}
