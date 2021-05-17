import {Injectable} from "@angular/core";
//благодаря ему можно инжектировать другие сервисы
@Injectable({
  providedIn: 'root'  //рарегистрировать сервис в корневом модуле
})


export class AppCounterService {
  counter = 0

  increase() {
    this.counter++
  }

  decrease() {
    this.counter--
  }
}
