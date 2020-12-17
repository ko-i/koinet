import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  welcome = 'Welcome!';

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(): void {

  }

  navigateToLuBenWeiSquare(): void {
    this.router.navigate(['/lu-ben-wei-square']);
  }

}
