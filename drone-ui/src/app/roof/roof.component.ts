import { Component, OnInit } from '@angular/core';
import { SubscriberComponent } from "../subscriber/subscriber.component";

@Component({
  selector: 'app-roof',
  templateUrl: './roof.component.html',
  styleUrls: ['./roof.component.scss']
})
export class RoofComponent extends SubscriberComponent {

  topic = '/roof_state';
  messageType = 'std_msgs/Bool';

}
