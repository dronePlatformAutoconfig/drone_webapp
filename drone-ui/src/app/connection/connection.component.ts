import { Component, OnInit } from '@angular/core';
import { ROSConnectionService} from "../rosconnection.service";
import * as ROSLIB from 'roslib';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  constructor(private rosConnection: ROSConnectionService) { }

  ipAsString = '';
  cmdVel = '';
  ngOnInit(): void {
  }

  connect() {
    this.rosConnection.connect(this.ipAsString);

    let listener = new ROSLIB.Topic({
      ros : this.rosConnection.ros,
      name : '/cmd_vel',
      messageType : 'geometry_msgs/Twist'
    });
    listener.subscribe((message) => {
        this.cmdVel = message;
        console.log(message);
      }
    );
  }
}
