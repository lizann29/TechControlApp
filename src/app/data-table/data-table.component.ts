import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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
  param: any;
  username: string = ''; 
  password: string = ''; 

  

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.username = queryParams['username'] ;
      this.password = queryParams['password'];

      console.log('Username:', this.username);
      console.log('Password:', this.password);
      this.getData();
    });
  }

  getData() {
    this.http
      .get<any[]>(`https://localhost:7028/api/Car/GetAllCars?username=${this.username}&password=${this.password}`)
      .subscribe(
        (data) => {
          this.carsData = data.map((car) => ({
            ...car,
            isInspectedText: car.isInspected ? 'განბაჟებულია' : 'განუბაჟებელია',
          }));
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