import { Component, OnInit } from '@angular/core';
import * as ROSLIB from 'roslib';
import { ROSConnectionService } from '../rosconnection.service';
import { ElementRef } from "@angular/core";

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {

  constructor(private rosConnection: ROSConnectionService, private elem: ElementRef) {
    // If topic is defined as elements attribute use topic from attribute
    const topicAttr = this.elem.nativeElement.attributes.topic;
    this.topic = topicAttr ? topicAttr.nodeValue : '';
  }

  topic = '';
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
    });
    listener.subscribe((message) => {
        this.message = message;
      }
    );
  }
  getData() {
    return this.message['data'] ? this.message['data'] : 'No data';
  }
}
