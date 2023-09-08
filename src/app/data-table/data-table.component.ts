import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  carsData: any[] = [];
  filterText: string = '';
  errorMessage: string = '';
  constructor(private http: HttpClient) {
    }

ngOnInit(): void {
  this.http.get<any[]>('https://localhost:7028/api/Car/GetAllCars?username=mygpscars&password=mygpscars12345').subscribe(
      (data) => {
        this.carsData = data;
        console.log(this.carsData);
      },
      (error) => {
        this.errorMessage = 'An error occurred while fetching car data. Please try again later.';
        console.error('Error loading cars data by dates:', error);
      }
    );
 }
 
}