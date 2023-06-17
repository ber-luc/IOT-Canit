import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  sieges = [
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,1,2,1,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
