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
      ban: 'assets/img/person.png',
      src: 'assets/img/arrow-image.png',
      subTitle: 'التقاصيل',
    },
    {
      title: 'عشان أحب السعودية',
      ban: 'assets/img/person1.png',
      src: 'assets/img/arrow-image.png',
      subTitle: 'التقاصيل',
    },
    {
      title: 'عشان أحب السعودية',
      ban: 'assets/img/person2.png',
      src: 'assets/img/arrow-image.png',
      subTitle: 'التقاصيل',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
