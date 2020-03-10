import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  // Photo variables;
  PhotoCounter: number = 0;
  PhotoText: string = "";

  //Video variables
  VideoCounter: number = 0;
  VideoText: string = "";

  //Roof variables
  IsOpen: boolean = false;
  RoofText: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  photoClick()
  {

    //Photo event
    this.PhotoText = "This is your photo:"
    this.PhotoCounter += 1;

    
  }

  videoClick()
  {
    //Video event
    this.VideoText = "This is your video:"
    this.VideoCounter += 1;
  }

  roofClick()
  {
    if (this.IsOpen) {
      this.IsOpen = false;
      this.RoofText = "The roof is closed.";
    }
    else
    {
      this.IsOpen = true;
      this.RoofText = "The roof is open.";
    }
  }
}
