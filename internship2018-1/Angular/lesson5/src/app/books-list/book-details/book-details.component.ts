import { Component, Input, EventEmitter, Output } from '@angular/core';

import { BookModel } from './book.model';

@Component({
    selector: 'book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
    @Input()
    book: BookModel;

    @Output()
    favoriteClicked = new EventEmitter<string>();
}
