import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
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

    this.smokeMessage = '肺癌进度(' + this.timeToLungCancer.toFixed(4) + '/1.0000)';
  }

  setDrinkMessage(drinkCount: number): void {
    const speed = 1 / drinkCount;
    this.timeToLiverCancer += speed * 0.1;

    this.drinkMessage = '肝癌进度(' + this.timeToLiverCancer.toFixed(4) + '/1.0000)';
  }

  setDrawHairMessage(drawHairCount: number): void {
    const speed = 1 / drawHairCount;
    this.timeToHairCancer += speed * 0.1;

    this.drawHairMessage = '头皮发麻进度(' + this.timeToHairCancer.toFixed(4) + '/1.0000)';
  }

  setDoHighMathMessage(doHighMathCount: number): void {
    const speed = 1 / doHighMathCount;
    this.timeToDeath += speed * 0.1;

    this.doHighMathMessage = '。您离死不远了！死亡进度(' + this.timeToDeath.toFixed(4) + '/1.0000)';
  }

}
