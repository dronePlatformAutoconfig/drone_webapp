import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ROSConnectionService } from '../rosconnection.service';

@Component({
  selector: 'app-video-panel',
  templateUrl: './video-panel.component.html',
  styleUrls: ['./video-panel.component.scss']
})
export class VideoPanelComponent implements OnInit {

  constructor(public rosConnection: ROSConnectionService, private changeDetector: ChangeDetectorRef) {}

  timestamp = '';

  ngOnInit(): void {
    setInterval(() => {
      this.timestamp = this.timestamp === ' ' ? '' : ' ';
      this.changeDetector.markForCheck(); this.changeDetector.detectChanges(); }, 1000);
  }

  getVideoSrc() {
    // Timestamp forces image to reload
    return `http://${this.rosConnection.hostname}:8080/stream?topic=/drone_cam${this.timestamp}`;
  }
}
