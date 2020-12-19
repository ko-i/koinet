import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-high-math',
  templateUrl: './do-high-math.component.html',
  styleUrls: ['./do-high-math.component.scss']
})
export class DoHighMathComponent implements OnInit {

  doHighMathCount = 0;
  doHighMathMessage = '。';
  hignMathMarkWillGet = 0.0;

  constructor() { }

  ngOnInit(): void {
  }


  doHighMath(): void {
    this.doHighMathCount++;

    this.setDoHighMathMessage(this.doHighMathCount);
  }

  setDoHighMathMessage(doHighMathCount: number): void {
    const speed = 1 / doHighMathCount;
    this.hignMathMarkWillGet += speed * 0.1;

    this.doHighMathMessage = '预计期末您能考: ' + (this.hignMathMarkWillGet * 60).toFixed(2) + '分，及格还需努力。';
  }

}
