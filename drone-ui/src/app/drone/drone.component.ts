import { Component, OnInit } from '@angular/core';
import { ROSConnectionService} from "../rosconnection.service";
import * as ROSLIB from 'roslib';

@Component({
  selector: 'app-drone',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.scss']
})
export class DroneComponent implements OnInit {

  constructor(public rosConnection: ROSConnectionService) { }

  ngOnInit(): void {}
}
