import { Component } from '@angular/core';
import { SubscriberComponent} from '../subscriber/subscriber.component';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.scss']
})
export class ChargeComponent extends SubscriberComponent {

  topic = '/charge';

  messageAsPercent() {
    const val = this.message['data'] ? parseInt(this.message['data']) : '---';
    return val + '%';
  }

  calcPower() {
    const val = this.message['data'] ? 61 / 100 * parseInt(this.message['data']) : 0;
    return val + 'px';
  }
}
