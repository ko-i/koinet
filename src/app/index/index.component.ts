import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title = 'Koinet';

  constructor() { }

  ngOnInit(): void {
  }

  test(): void {
    console.log(1);
  }

}
