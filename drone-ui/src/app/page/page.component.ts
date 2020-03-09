import { Component, OnInit } from '@angular/core';
import * as ROSLIB from 'roslib';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass'],
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {var ros = new ROSLIB.Ros({
    url : 'ws://3.114.16.209:9090'
    // url : 'ws://18.130.133.106:9090'
  });

    ros.on('connection', function() {
      console.log('Connected to websocket server.');
    });

    ros.on('error', function(error) {
      console.log('Error connecting to websocket server: ', error);
    });

    ros.on('close', function() {
      console.log('Connection to websocket server closed.');
    });

    // Publishing a Topic
    // ------------------

    var cmdVel = new ROSLIB.Topic({
      ros : ros,
      name : '/cmd_vel',
      messageType : 'geometry_msgs/Twist'
    });

    var twist = new ROSLIB.Message({
      linear : {
        x : 0.5,
        y : 0.0,
        z : 0.0
      },
      angular : {
        x : 0.9,
        y : 0.0,
        z : 0.9
      }
    });

    console.log("Publishing cmd_vel");
    cmdVel.publish(twist);
  }

}
