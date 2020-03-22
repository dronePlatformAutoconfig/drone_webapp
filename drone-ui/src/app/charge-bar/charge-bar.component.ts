import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-charge-bar',
  templateUrl: './charge-bar.component.html',
  styleUrls: ['./charge-bar.component.scss']
})


export class ChargeBarComponent  {
  color: ThemePalette = 'warn';
  mode: ProgressBarMode = 'determinate';
  value = 10;
  
}



