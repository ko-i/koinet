import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lu-ben-wei-square',
  templateUrl: './lu-ben-wei-square.component.html',
  styleUrls: ['./lu-ben-wei-square.component.scss']
})
export class LuBenWeiSquareComponent implements OnInit {

  smokeCount: number;
  drinkCount: number;
  drawHairCount: number;
  doHighMathCount: number;

  smokeMessage: string;
  drinkMessage: string;
  drawHairMessage: string;
  doHighMathMessage: string;

  timeToLungCancer: number;
  timeToLiverCancer: number;
  timeToHairCancer: number;
  timeToDeath: number;

  constructor() {
    this.smokeCount = 0;
    this.drinkCount = 0;
    this.drawHairCount = 0;
    this.doHighMathCount = 0;

    this.smokeMessage = '。';
    this.drinkMessage = '。';
    this.drawHairMessage = '。';
    this.doHighMathMessage = '。';

    this.timeToLungCancer = 0.0;
    this.timeToLiverCancer = 0.0;
    this.timeToHairCancer = 0.0;
    this.timeToDeath = 0.0;
  }

  ngOnInit(): void {

  }

  smoke(): void {
    console.log('smoke');
    this.smokeCount++;

    this.setSmokeMessage(this.smokeCount);
  }

  drink(): void {
    console.log('drink');
    this.drinkCount++;

    this.setDrinkMessage(this.drinkCount);
  }

  drawHair(): void {
    console.log('drawHair');
    this.drawHairCount++;

    this.setDrawHairMessage(this.drawHairCount);
  }

  doHighMath(): void {
    console.log('doHighMath');
    this.doHighMathCount++;

    this.setDoHighMathMessage(this.doHighMathCount);
  }

  setSmokeMessage(smokeCount: number): void {
    const speed = 1 / smokeCount;
    this.timeToLungCancer += speed * 0.1;

    this.smokeMessage = '。\n您得肺癌的进度: ' + (this.timeToLungCancer * 100).toFixed(4) + '%';
  }

  setDrinkMessage(drinkCount: number): void {
    const speed = 1 / drinkCount;
    this.timeToLiverCancer += speed * 0.1;

    this.drinkMessage = '。\n您得肝癌的进度: ' + (this.timeToLiverCancer * 100).toFixed(4) + '%';
  }

  setDrawHairMessage(drawHairCount: number): void {
    const speed = 1 / drawHairCount;
    this.timeToHairCancer += speed * 0.1;

    this.drawHairMessage = '。\n您头皮发麻的进度: ' + (this.timeToHairCancer * 100).toFixed(4) + '%';
  }

  setDoHighMathMessage(doHighMathCount: number): void {
    const speed = 1 / doHighMathCount;
    this.timeToDeath += speed * 0.1;

    this.doHighMathMessage = '。\n您离死不远了！您的死亡进度: ' + (this.timeToDeath * 100).toFixed(4) + '%';
  }

}
