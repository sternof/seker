import {Injectable} from '@angular/core';

@Injectable()
export class Logger {

  log(msg: string): void {
    console.log(msg);
  }

}