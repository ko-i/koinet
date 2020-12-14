import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  private smokeCount: number;
  private drinkCount: number;
  private drawHairCount: number;
  private doHighMathCount: number;

  constructor() {
    this.smokeCount = 0;
    this.drinkCount = 0;
    this.drawHairCount = 0;
    this.doHighMathCount = 0;
  }

  ngOnInit(): void {

  }

  smoke(): void {
    console.log('smoke');
    this.smokeCount++;
  }

  drink(): void {
    console.log('drink');
    this.drinkCount++;
  }

  drawHair(): void {
    console.log('drawHair');
    this.drawHairCount++;
  }

  doHighMath(): void {
    console.log('doHighMath');
    this.doHighMathCount++;
  }

}
