import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Premier post',
      content: 'Ea ipsum cillum do eu cupidatat sunt ipsum est minim.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Deuxième post',
      content: 'Laboris ex in exercitation anim ipsum ex.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Troisième post',
      content: 'Dolore eu et qui mollit ad anim commodo in ut.',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
