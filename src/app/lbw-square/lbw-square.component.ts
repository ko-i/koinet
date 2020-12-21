import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lbw-square',
  templateUrl: './lbw-square.component.html',
  styleUrls: ['./lbw-square.component.css']
})
export class LbwSquareComponent implements OnInit {

  pubgCount: number;
  pubgMessage: string;

  douDiZhuCount: number;
  douDiZhuMessage: string;
  douDiZhuStrings: string[];

  gettingOverItCount: number;
  gettingOverItMessage: string;

  constructor(
    private router: Router,
  ) {
    this.pubgCount = 0;
    this.pubgMessage = '';

    this.douDiZhuCount = 0;
    this.douDiZhuMessage = '';
    this.douDiZhuStrings = [
      '你们可能不知道只用20万赢到578万是什么概念。',
      '我们一般只会用两个字来形容这种人：',
      '赌怪。',
      '我经常说一句话，当年陈刀仔他能用20块赢到3700万，我卢本伟用20万赢到500万不是问题。',
      '埋伏他一手，这个牌不能捡，这个牌不用捡，他死定了。',
      '反手给一个超级加倍，闷声发大财。',
      '他也超级加倍？但是不用怕，他赢不了我。',
      '五六七八九十，两个炸，很厉害这个牌，如果把这个K换成J，我这个牌将绝杀，可惜换不得。',
      '单走一个六，傻～逼，直接把K走了。',
      '走他一张2顶他。',
      '阿姨快点，阿姨，阿姨你K都不要吗？',
      '阿姨你快点啊！阿姨别磨磨蹭蹭的。',
      '五六七八九十。打错了，应该打2的。',
      '给阿姨倒杯茶好吧，阿姨给你倒一杯卡布奇诺。',
      '给阿姨倒一杯卡布奇诺！开始你的炸弹秀，炸他炸他。漂亮！',
      '十七张牌你能秒我？你能秒杀我？！',
      '你今天能十七张牌把我卢本伟秒了，我！当！场！就把这个电脑屏幕吃掉。',
      '（飞机）',
      '还来么？'
    ];

    this.gettingOverItCount = 0;
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
    this.douDiZhuMessage = this.douDiZhuStrings[(this.douDiZhuCount - 1) % this.douDiZhuStrings.length];
  }

  setgettingOverItMessage(gettingOverItCount: number): void {
    this.gettingOverItMessage = '玩游戏还要笑着玩。';
  }

  navigateToIndex(): void {
    this.router.navigate(['/index']);
  }

}
