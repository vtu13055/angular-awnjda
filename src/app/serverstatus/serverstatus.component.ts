import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './serverstatus.component.html',
  styleUrls: ['./serverstatus.component.css'],
})
export class ServerStatus {
  serverID: number = 10;
  status: string = 'Not Available';
  constructor() {
    this.status = Math.random() > 0.5 ? 'Available' : 'Not Available';
  }
  getServerStatus() {
    return this.status;
  }
  getColor() {
    if (this.getServerStatus() === 'Available') {
      return 'green';
    }
    return 'red';
  }
}
