import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('hide', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden',
      })),
      state('show', style({
        height: '*',
        opacity: '1',
      })),
      transition('hide <=> show', animate('500ms ease-in-out')),
    ])
  ]
})
export class MenuComponent implements OnInit {
  menuItems = {
    salleShow: false,
    salles: [
      {
        title: 'Salle 1',
        Taille:
          {
            row: 10,
            column: 20,
          },
      },
      {
        title: 'Salle 2',
        Taille:
          {
            row: 10,
            column: 20,
          }
      },
  ]
};

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.menuItems.salleShow = !this.menuItems.salleShow;
    console.log(this.menuItems.salleShow)
  }
}
