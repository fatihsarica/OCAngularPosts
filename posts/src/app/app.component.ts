import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBeUcbf7t6B-Rr0gdiQmlMRA1lPZihH6qU",
      authDomain: "posts-458d4.firebaseapp.com",
      databaseURL: "https://posts-458d4.firebaseio.com",
      projectId: "posts-458d4",
      storageBucket: "posts-458d4.appspot.com",
      messagingSenderId: "1070890272847",
      appId: "1:1070890272847:web:2e1c94016957a549a0023a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
