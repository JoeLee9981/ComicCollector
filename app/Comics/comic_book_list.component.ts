import { Component } from 'angular2/core';

@Component({
	selector: 'pm-comics',
	templateUrl: 'app/Comics/comic_book_list.component.html'
})
export class ComicBookListComponent {
	pageTitle: string = 'Comic Book List';
}