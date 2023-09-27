import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';
import { IMetadata } from 'src/app/models/book-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  data: IMetadata = {
    count: 0,
    next: '',
    previous: undefined,
    results: []
  }

  searchByAuthor: any = []

  constructor(private connServ: ConnectionService){}

  ngOnInit(): void {
      this.connServ.getData().subscribe({
        next: (data: IMetadata) => this.data = data,
        error: (err: any) => console.log(err),
      });

      this.connServ.search.subscribe((value: any) => {
        this.searchByAuthor = value;
      });
  }

  onSearchedAuthorEntered(searchValue: string) {
    this.searchByAuthor = searchValue;
  }

}
