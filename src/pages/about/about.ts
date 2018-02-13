import { Component } from '@angular/core';
import { AppConfig } from '../../../config/app.config';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  appName: string;
  environment: string;
  constructor(private appConfig: AppConfig) {
    this.appName = this.appConfig.appName;
    this.environment = this.appConfig.environment;
  }
}
