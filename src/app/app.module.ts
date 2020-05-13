import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';


import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign/campaign.component';
import { HeaderComponent } from './header/header.component';
import { BackgroundDirective } from './campaign/team/directives/backGround.directive';
import { ClickOutsideDirective } from './campaign/team/directives/clickOutSide.directive';
import { TeamComponent } from './campaign/team/team.component';
import { ErrorInterceptor } from './error.intercepter';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CampaignComponent,
    TeamComponent,
    ErrorComponent,
    BackgroundDirective,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  entryComponents: [ErrorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
