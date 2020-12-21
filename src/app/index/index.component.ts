import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  welcome = 'Welcome!';
  hour = '4';

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    const date: Date = new Date();
    this.hour = date.getHours().toString();
  }

  navigateToTju(): void {
    this.router.navigate(['/tju']);
  }

  navigateToLuBenWeiSquare(): void {
    this.router.navigate(['/lbw-square']);
  }

  navigateToBar(): void {
    this.router.navigate(['/bar']);
  }

}

