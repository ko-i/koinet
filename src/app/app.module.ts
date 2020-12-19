import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LuBenWeiSquareComponent } from './lu-ben-wei-square/lu-ben-wei-square.component';
import { BarComponent } from './bar/bar.component';
import { TjuModule } from './tju/tju.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LuBenWeiSquareComponent,
    BarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    TjuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
