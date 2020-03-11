import { Component, OnInit } from '@angular/core';
import { ROSConnectionService} from "../rosconnection.service";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  constructor(private rosConnection: ROSConnectionService) { }

  ipAsString = '';

  ngOnInit(): void {
  }

  connect() {
    this.rosConnection.connect(this.ipAsString);
  }
}
