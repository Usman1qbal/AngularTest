import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.css'],
})
export class InitiativesComponent implements OnInit {
  cardsContent: CardModel[] = [
    {
      title: 'عشان أحب السعودية',
      src: 'https://static3.avast.com/1/web/i/v2/components/arrow-m-right-orange.png',
      subTitle: 'التقاصيل',
    },
    {
      title: 'عشان أحب السعودية',
      src: 'https://static3.avast.com/1/web/i/v2/components/arrow-m-right-orange.png',
      subTitle: 'التقاصيل',
    },
    {
      title: 'عشان أحب السعودية',
      src: 'https://static3.avast.com/1/web/i/v2/components/arrow-m-right-orange.png',
      subTitle: 'التقاصيل',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
