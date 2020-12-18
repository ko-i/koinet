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
  hignMathMarkWillGet = 0.0;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    const date: Date = new Date();
    this.hour = date.getHours().toString();
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

  navigateToIndex(): void {
    this.router.navigate(['/index']);
  }

}
