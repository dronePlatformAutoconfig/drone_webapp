import { Component, OnInit } from '@angular/core';
import { ROSConnectionService } from '../rosconnection.service';

@Component({
  selector: 'app-video-panel',
  templateUrl: './video-panel.component.html',
  styleUrls: ['./video-panel.component.scss']
})
export class VideoPanelComponent implements OnInit {

  constructor(public rosConnection: ROSConnectionService) {}

  urlModifier = '';

  ngOnInit(): void {
    setInterval(() => {
      // Image reload is required after UI is connected to ROS, otherwise the image will not be displayed.
      // A kind of creative solution: the change of URL forces the image to reload, however anything, besides
      // the space character will break the link
      // Inspired by this answer:
      // https://stackoverflow.com/questions/17394440/add-random-variable-after-image-url-with-javascript
      this.urlModifier = this.urlModifier === ' ' ? '' : ' '; }, 1000);
  }

  getVideoSrc() {
    // urlModifier forces image to reload
    return `http://${this.rosConnection.hostname}:8080/stream?topic=/drone_cam${this.urlModifier}`;
  }
}
