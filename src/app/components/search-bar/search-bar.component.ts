import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  searchedAuthor: string = '';

  @Output()
  searchedAuthorChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchedAuthorChanged() {
    this.searchedAuthorChanged.emit(this.searchedAuthor);
    console.log(this.searchedAuthor);
  }

  clearInputQuery() {
    this.searchedAuthor = '';
    this.onSearchedAuthorChanged();
  }

}
