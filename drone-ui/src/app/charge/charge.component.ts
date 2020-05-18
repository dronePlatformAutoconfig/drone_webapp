import { Component, OnInit } from '@angular/core';
import { SubscriberComponent} from '../subscriber/subscriber.component';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.scss']
})
export class ChargeComponent extends SubscriberComponent {

  topic = '/charge';
  messageType = 'std_msgs/String';

  color: ThemePalette = 'warn';
  mode: ProgressBarMode = 'determinate';

  parseMsg = parseInt;
  // value = parseInt(this.message['data']);
  percent = 79;
  value = 61 / 100 * this.percent;

}
