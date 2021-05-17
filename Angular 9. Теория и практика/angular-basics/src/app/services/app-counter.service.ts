import {Injectable} from "@angular/core";
import {LogService} from "./log.service";
//благодаря ему можно инжектировать другие сервисы
@Injectable({
  providedIn: 'root'  //рарегистрировать сервис в корневом модуле
})


export class AppCounterService {
  counter = 0

  constructor(public logService:LogService) {
  }

  increase() {
    this.logService.log('increase counter...')
    this.counter++
  }

  decrease() {
    this.logService.log('decrease counter...')
    this.counter--
  }
}
