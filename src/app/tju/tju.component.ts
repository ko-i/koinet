import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tju',
  templateUrl: './tju.component.html',
  styleUrls: ['./tju.component.scss']
})
export class TjuComponent implements OnInit {
  hour = '4';

  doHighMathCount = 0;
  doHighMathMessage = '。';
  timeToDeath = 0.0;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    const date: Date = new Date();
    this.hour = date.getHours().toString();
  }

  doHighMath(): void {
    console.log('doHighMath');
    this.doHighMathCount++;

    this.setDoHighMathMessage(this.doHighMathCount);
  }

  setDoHighMathMessage(doHighMathCount: number): void {
    const speed = 1 / doHighMathCount;
    this.timeToDeath += speed * 0.1;

    this.doHighMathMessage = '。\n您离死不远了！您的死亡进度: ' + (this.timeToDeath * 100).toFixed(4) + '%';
  }

  navigateToIndex(): void {
    this.router.navigate(['/index']);
  }

}