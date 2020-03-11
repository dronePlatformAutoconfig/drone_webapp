import { Injectable } from '@angular/core';
import * as ROSLIB from 'roslib';

@Injectable({
  providedIn: 'root'
})
export class ROSConnectionService {

  constructor() { }

  publicIP = '';

  connect(ipAsString) {
    let ros = new ROSLIB.Ros({
      url : `ws://${ipAsString}:9090`
    });

    ros.on('connection', () => {
      console.log('Connected to websocket server.');
      this.publicIP = ipAsString;
    });

    ros.on('error', function(error) {
      console.log('Error connecting to websocket server: ', error);
    });

    ros.on('close', function() {
      console.log('Connection to websocket server closed.');
    });
  }
}
