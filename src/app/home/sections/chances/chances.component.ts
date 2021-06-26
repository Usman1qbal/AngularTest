import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-chances',
  templateUrl: './chances.component.html',
  styleUrls: ['./chances.component.css'],
})
export class ChancesComponent implements OnInit {
  cardsContent: CardModel[] = [
    {
      src: 'assets/img/c3.png',
      title: 'تنظيف شواطئ المملكة',
      content:
        'مبادرة تنظيف شاطئ السيف لنشر الوعي و الحفاظ علي البيئة و المشهد الحضاري',
    },
    
    {
      src: 'assets/img/c2.png',
      title: 'تنظيف شواطئ المملكة',
      content:
        'مبادرة تنظيف شاطئ السيف لنشر الوعي و الحفاظ علي البيئة و المشهد الحضاري',
    },
    {
      src: 'assets/img/c1.png',
      title: 'عشان أحب الشرقية',
      content:
        'يا شباب الشرقية جهزوا نفسكم وحضروا إبداعاتكم سنتواجد في الكورنيش، وننفذ مشروعنا الأول الفني لتجميل الشرقية',
    },
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
