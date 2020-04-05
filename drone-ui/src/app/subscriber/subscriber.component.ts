import { Component, OnInit } from '@angular/core';
import * as ROSLIB from 'roslib';
import {ROSConnectionService} from '../rosconnection.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {

  constructor(private rosConnection: ROSConnectionService) {
  }

  topic = '';
  messageType = '';
  message = {};

  ngOnInit(): void {
    document.addEventListener('rosconnected', () => {
      console.log(this.topic + ' topic');
      this.startListener();
    });
  }
  startListener() {
    const listener = new ROSLIB.Topic({
      ros : this.rosConnection.ros,
      name : this.topic,
      messageType : this.messageType
    });
    listener.subscribe((message) => {
        this.message = message;
      }
    );
  }
}
