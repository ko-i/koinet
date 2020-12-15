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

  constructor() {
    this.smokeCount = 0;
    this.drinkCount = 0;
    this.drawHairCount = 0;
    this.doHighMathCount = 0;

    this.smokeMessage = '。';
    this.drinkMessage = '。';
    this.drawHairMessage = '。';
    this.doHighMathMessage = '。';
  }

  ngOnInit(): void {

  }

  smoke(): void {
    console.log('smoke');
    this.smokeCount++;

    this.smokeMessage = this.getSmokeMessage(this.smokeCount);
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

  getSmokeMessage(smokeCount: number): string {
    if (smokeCount >= 1024)
    {
      return '。您死到临头了！';
    }

    if (smokeCount >= 512)
    {
      return '。加油！您快要死啦！！！！！！！！';
    }

    if (smokeCount >= 256)
    {
      return '。加油！您快要死啦！！！！！！！';
    }

    if (smokeCount >= 128)
    {
      return '。加油！您快要死啦！！！！！！';
    }

    if (smokeCount >= 64)
    {
      return '。加油！您快要死啦！！！！！';
    }

    if (smokeCount >= 32)
    {
      return '。加油！您快要死啦！！！！';
    }

    if (smokeCount >= 16)
    {
      return '。加油！您快要死啦！！！';
    }

    if (smokeCount >= 8)
    {
      return '。加油！您快要死啦！！';
    }

    if (smokeCount >= 4)
    {
      return '。加油！您快要死啦！';
    }

    if (smokeCount >= 2)
    {
      return '。感觉不错！';
    }

    if (smokeCount >= 1)
    {
      return '。';
    }

    return '。';

  }

}
