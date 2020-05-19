import { Component } from '@angular/core';
import {SubscriberComponent} from "../subscriber/subscriber.component";

@Component({
  selector: 'app-station-panel',
  templateUrl: './station-panel.component.html',
  styleUrls: ['./station-panel.component.scss']
})
export class StationPanelComponent extends SubscriberComponent {

  topic = '/roof_state';
  messageType = 'std_msgs/String';

}
