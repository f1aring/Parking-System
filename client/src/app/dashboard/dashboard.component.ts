import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Park } from '../park';
import { ParkingService } from '../parking.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private api: ParkingService){}
  public park: Park[] = [];
  
  profileForm = new FormGroup({
    number_plate: new FormControl(''),
    slot: new FormControl(''),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    
    this.parkACar(this.profileForm.value.number_plate, Number(this.profileForm.value.slot));
    this.profileForm.reset();
  }

  parkACar(number_plate: any, slot: number): void{
      this.api.parkACar(number_plate, slot).subscribe(data =>{
        const dt = Object.values(data)
        console.log(dt)
      })
  }
}
