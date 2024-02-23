import { Component, EventEmitter, Output } from '@angular/core';
import { ParkingService } from '../parking.service';
import { Park } from '../park';
@Component({
  selector: 'app-parked-vehicles',
  templateUrl: './parked-vehicles.component.html',
  styleUrl: './parked-vehicles.component.css'
})
export class ParkedVehiclesComponent {
  constructor(private api: ParkingService){}
  public park: Park[] = [];
  public time?: number;

  @Output() customEvent = new EventEmitter<string>();

  emitEvent() {
    this.customEvent.emit('Hello from child!');
  }

  ngOnInit(): void{
    this.getParking();
  }

  getParking(): void{
    this.api.getParkedCars().subscribe(data=>{
      this.park = data;
    })
  }
  checkOut(id: string): void {
    console.log(id, "The id to find");

    const car = this.park.find(data => data._id === id);
    if (car) {
      let checkIn = this.parseDate(car.check); // Corrected here
      console.log(checkIn);

      this.api.updateTime(car._id).subscribe(data => {
        let checkOut = this.parseDate(data.check); // Corrected here
        this.time = checkOut.getTime() - checkIn.getTime();
        console.log(data.check);
      });
    }
  }

  private parseDate(dateString: Date): Date {
    // Custom date parsing logic here
    return new Date(dateString);
  }
}

// handleTopicDownvote (topic: ITopic) {
//   this.api.decrementTopicScore(topic._id).subscribe(updatedTopic => {
//     const newList = this.topics.map(item => item._id === updatedTopic._id ? updatedTopic : item);
//     this.topics = sortTopics(newList);
//   })
// }
//2024-02-21T14:53:54.133+00:00
//2024-02-22T19:14:07.559+00:00