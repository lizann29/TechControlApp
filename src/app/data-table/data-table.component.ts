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

  currentPage: number = 1;
  totalPages: any; 
  itemsPerPage: number = 15; 
  pageindex: number = 1;
  

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://localhost:7028/api/Car/GetAllCars?username=mygpscars&password=mygpscars12345').subscribe(
      (data) => {
        this.carsData = data;
        this.totalPages = Math.ceil(data.length / this.itemsPerPage); 
    
        console.log(this.carsData);
      },
      (error) => {
        console.error('Error loading cars', error);
      }
    );
    
  }

  previousMainPage() {
    if (this.pageindex > 1) {
      this.pageindex--;
    }
  }
  
  nextMainPage() {
    if (this.pageindex < this.totalPages) {
      this.pageindex++;
    }
  }
  
}
