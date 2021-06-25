import { Component, OnInit } from '@angular/core';
import { NavbarItem } from '../../models/navbar.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  activeSection: string = 'banner';
  navBarItems: NavbarItem[] = [
    { text: 'الشركات', section: 'section6' },
    { text: 'تواصل معنا', section: 'section7' },
    { text: 'فرص انوسوفت', section: 'advantage' },
    { text: 'المبادرات', section: 'section2' },
    { text: 'عن المنصة', section: 'section3' },
    { text: 'الرئيسية', section: 'banner' },
  ];
  constructor() {}
  ngOnInit(): void {}
  scrollTo(scetionName: string): void {
    this.activeSection = scetionName;
    const elementList = document.querySelectorAll('.' + scetionName);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
}