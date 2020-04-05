import { Component, OnInit } from '@angular/core';
import {SubscriberComponent} from "../subscriber/subscriber.component";

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent extends SubscriberComponent{
  topic = '/center';
  messageType = 'std_msgs/String';
}
