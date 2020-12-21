import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tju',
  templateUrl: './tju.component.html',
  styleUrls: ['./tju.component.css']
})
export class TjuComponent implements OnInit {
  hour = '4';

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    const date: Date = new Date();
    this.hour = date.getHours().toString();
  }

  navigateToIndex(): void {
    this.router.navigate(['/index']);
  }

  navigateToDoHighMath(): void {
    this.router.navigate(['tju/high-math-exam']);
  }

}
