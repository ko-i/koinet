import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lu-ben-wei-square',
  templateUrl: './lu-ben-wei-square.component.html',
  styleUrls: ['./lu-ben-wei-square.component.scss']
})
export class LuBenWeiSquareComponent implements OnInit {

  pubgCount: number;
  douDiZhuCount: number;
  gettingOverItCount: number;

  pubgMessage: string;
  douDiZhuMessage: string;
  gettingOverItMessage: string;

  constructor(
    private router: Router,
  ) {
    this.pubgCount = 0;
    this.douDiZhuCount = 0;
    this.gettingOverItCount = 0;

    this.pubgMessage = '';
    this.douDiZhuMessage = '';
    this.gettingOverItMessage = '';

  }

  ngOnInit(): void {

  }

  pubg(): void {
    this.pubgCount++;

    this.setPubgMessage(this.pubgCount);
  }

  douDiZhu(): void {
    this.douDiZhuCount++;

    this.setDouDiZhuMessage(this.pubgCount);
  }

  gettingOverIt(): void {
    this.gettingOverItCount++;

    this.setgettingOverItMessage(this.gettingOverItCount);
  }

  setPubgMessage(pubgCount: number): void {
    this.pubgMessage = '我卢本伟没有开挂。';
  }
  setDouDiZhuMessage(douDiZhuCount: number): void {
    this.douDiZhuMessage = '给阿姨倒一杯卡布奇诺';
  }

  setgettingOverItMessage(gettingOverItCount: number): void {
    this.gettingOverItMessage = '玩游戏还要笑着玩。';
  }

  navigateToIndex(): void {
    this.router.navigate(['/index']);
  }

}
