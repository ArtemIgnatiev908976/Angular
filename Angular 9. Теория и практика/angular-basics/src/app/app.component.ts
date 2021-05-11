import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dynamic title'
  number = 42
  arr = [1,2,3]
  obj = {a:1, b:{c:2}}
  // img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
  inputValue = ''


  constructor() {
    // setTimeout(()=>{
    //   console.log('Time out is over')
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    // },5000)
  }

  onInput(event:KeyboardEvent){
    console.log('Event',event)
    this.inputValue = (<HTMLInputElement>event.target).value

  }
onClick(){
  console.log('Click')
}
onBlur(str:string){
this.inputValue = str
}

}
