import { Component, OnInit } from '@angular/core';
import { SubscriberComponent} from "../subscriber/subscriber.component";

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.scss']
})
export class ChargeComponent extends SubscriberComponent {

  topic = '/charge';
  messageType = 'std_msgs/String';

}
