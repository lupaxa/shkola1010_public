import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { BookModel } from './book-details/book.model';
import { BooksListService } from './books-list.service';

@Component({
	selector: 'books-list',
	templateUrl: './books-list.component.html',
	styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
	books: BookModel[];

	constructor(private service: BooksListService) { }

	ngOnInit() {
		this.service.getBooks()
			.subscribe(response => this.books = response);
	}

	markAsFavorite(id: string) {
		this.service.markAsFavorite(id)
			.pipe(switchMap(() => this.service.getBooks()))
			.subscribe(
				response => this.books = response,
				error => console.log(error)
			);
	}
}
