import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from  '@angular/router';

@Component({
  selector: 'app-book-edit-page',
  templateUrl: './book-edit-page.component.html',
  styleUrls: ['./book-edit-page.component.scss']
})
export class BookEditPageComponent implements OnInit {

  bookId: number;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => this.setBookId(params)
    )
  }

  setBookId(params: Params) {
    this.bookId = Number(params.id);
  }

}
