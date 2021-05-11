import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr = [1, 1, 2, 3, 5, 8, 13]

  obj =[
    {title: 'Post 1', author: 'Artem', comments: [
        {name:'Max', text: 'lorem1'},
        {name:'Max', text: 'lorem2'},
        {name:'Max', text: 'lorem3'},
      ]},

    {title: 'Post 2', author: 'Artem2', comments: [
        {name:'Max', text: 'lorem11'},
        {name:'Max', text: 'lorem22'},
        {name:'Max', text: 'lorem33'},
      ]},
  ]


}
