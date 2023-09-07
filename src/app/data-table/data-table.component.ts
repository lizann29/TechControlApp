import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  carsData: any[] = [];
  filterText: string = '';

  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.http.get<any[]>('./assets/fakedata.json').subscribe((data) => {
      this.carsData = data;
    });

    console.log(this.carsData);
  }
}
