import {Component, OnInit} from '@angular/core';
import {Building} from "../models/building";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {
  building: Building [] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/gebaeude/all").subscribe(data => {
      this.building = Object.values(data);
    });
  }

}
