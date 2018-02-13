import { Injectable } from '@angular/core';
import ENV from '@app/env';

@Injectable()
export class AppConfig {
  public environment: string;
  public appName: string;

  constructor() {
    console.log(ENV);
    this.appName = ENV['appName'];
    this.environment = ENV['environment'];
  }
}
