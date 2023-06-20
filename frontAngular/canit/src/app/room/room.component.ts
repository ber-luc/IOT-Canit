import { Component, OnInit } from '@angular/core';
import {SimulatorService} from "../service/simulator.service";
import {Matrix} from "../type/matrix";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  sieges: Matrix | undefined;

  constructor(private simulatorService: SimulatorService) { }

  ngOnInit(): void {
  }



  simulateMatrix(){
    let alertBoolean = false;
    this.simulatorService.getMatrix(10, 10).subscribe(matrix => {
      const convertedMatrix = matrix.map(row =>
        row.map(value => {
          if (value > 60) {
            alertBoolean = true
            return 2;
          } else if (value > 50) {
            return 1;
          } else {
            return 0;
          }
        })
      );
      console.log(matrix);

      console.log('result', convertedMatrix)
      this.sieges = convertedMatrix;

      setTimeout( () => {
        this.showAlert(alertBoolean)
      },100)
    });
  }

  showAlert(alertBoolean: boolean){
    if (alertBoolean){
      alert('un impotant ose faire du bruit, guillaume attaque ! ')
    }
  }
}
