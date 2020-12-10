import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Carpnet';
  selected = 1;

  smokeCount = 0;
  smokeInfo = '你还没喝过酒';
  drinkCount = 0;
  drinkInfo = '你还没抽过烟';
  drawHairCount = 0;
  drawHairInfo = '您还没烫过头';
  sleepCount = 0;
  sleepInfo = '您还没睡过';

  smoke(): void{
    this.selected = 1;
    this.smokeCount++;
  }

  drink(): void{
    this.selected = 2;
    this.drinkCount++;
  }

  drawHair(): void{
    this.selected = 3;
    this.drawHairCount++;
  }

  sleep(): void{
    this.selected = 4;
    this.sleepCount++;
  }


}
