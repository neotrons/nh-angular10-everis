import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent implements OnInit {

  constructor() { }
  title = 'example';
  imageUrl = 'https://via.placeholder.com/150';
  isUnchanged = true;
  classes = 'aClassDemo';
  buttonTitle = 'Ocultar imagen';
  displayNone: string;
  directives = ['ngIf', 'ngFor', 'ngSwitch', 'ng-template']
  myClass = 'addMyclass';
  withExample = '20px';
  books = [
    {
      "id": 1,
      "name": "Continuous Delivery",
      "isbn": "252621",
      "image": "http://nh-back.jcramireztello.com/media/books/5f287f75de25badfcc4e4e34_25.jpg",
      "language": "en",
      "publishedDate": "2005-12-18",
      "publisher": "Jez Humble & David Farley",
    },
    {
      "id": 2,
      "name": "Algorithms",
      "isbn": "252622",
      "image": "http://nh-back.jcramireztello.com/media/books/5f287faff2205a602fc8c376_24.jpg",
      "language": "en",
      "publishedDate": "2010-11-16",
      "publisher": "Robert Sedgewick & Kevin Wayne",
    },
    {
      "id": 3,
    "name": "The Self-Taught Programmer",
    "isbn": "252623",
    "image": "http://nh-back.jcramireztello.com/media/books/5f288004037f6811b18d3787_23.jpg",
    "language": "en",
    "publishedDate": "2017-02-18",
    "publisher": "Cory Althoff",
    }
  ];

  ngOnInit(): void {
  }

  changeTitle(): void {
    console.log(`Evento click parta cambiar titulo`);
    this.title = 'nuevo titulo';
  }

  hideImage(): void {
    if (this.displayNone) {
      this.displayNone = '';
      this.buttonTitle = 'Ocultar Imagen';
    }else {
      this.displayNone = 'none';
      this.buttonTitle = 'Mostrar Imagen';
    }
  }
}