import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchTerm: String = '';

  @Output() CountryToSearch = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.CountryToSearch.emit(this.searchTerm)
  }

}
