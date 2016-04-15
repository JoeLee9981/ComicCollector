import {Component} from 'angular2/core';
import {ComicBookListComponent} from './Comics/comic_book_list.component';

@Component({
    selector: 'pm-app',
    template: `
    	<div><h1>Stuff</h1>
    		<pm-comics></pm-comics>
    	</div>` ,
    	directives: [ComicBookListComponent]
})
export class AppComponent {
	pageTitle: string = 'Test Comic Book App';
}
