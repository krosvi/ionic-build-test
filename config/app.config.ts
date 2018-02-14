import { Injectable } from '@angular/core';
import ENV from '@app/env';

@Injectable()
export class AppConfig {
  public environment: string;
  public appName: string;

  constructor() {
    this.appName = ENV['appName'];
    this.environment = ENV['environment'];
  }
}
