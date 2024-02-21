import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  datos: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
      this.llenarData();
  }

  llenarData(){
      this.apiService.getdata().subscribe(data =>{
        this.datos = data.results;
        console.log(this.datos);
      });
  }
}
