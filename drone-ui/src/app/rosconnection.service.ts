import { Injectable } from '@angular/core';
import * as ROSLIB from 'roslib';

const rosConnectedEvent = new Event('rosconnected');

@Injectable({
  providedIn: 'root'
})
export class ROSConnectionService {

  constructor() { }

  ros = new ROSLIB.Ros();

  hostname = 'localhost';

  connect_websocket() {
    this.ros = new ROSLIB.Ros({
      url : `ws://${this.hostname}:9090`
    });

    this.ros.on('connection', () => {
      console.log('Connected to websocket server.');
      document.dispatchEvent(rosConnectedEvent);
    });

    this.ros.on('error', (error) => {
      console.log('Error connecting to websocket server: ', error);
    });

    this.ros.on('close', () => {
      console.log('Connection to websocket server closed.');
    });
  }
}
