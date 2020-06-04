import { Component, OnInit } from '@angular/core';
import { ROSConnectionService } from "../rosconnection.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private rosConnection: ROSConnectionService) { }

  ngOnInit(): void {
    this.rosConnection.connect_websocket();
  }
}
