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

  constructor(
    public rosConnection: ROSConnectionService,
    public elem: ElementRef) {
    // If topic is defined as elements attribute use topic from attribute
    const topicAttr = this.elem.nativeElement.attributes.topic;
    this.topic = topicAttr ? topicAttr.nodeValue : '';
    const defaultAttr = this.elem.nativeElement.attributes.default;
    this.defaultValue = defaultAttr ? defaultAttr.nodeValue : 'No data';
  }

  topic = '';
  defaultValue = '';
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
    return this.message['data'] ? this.message['data'] : this.defaultValue;
  }
}
