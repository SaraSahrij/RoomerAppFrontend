import {Component, OnInit} from '@angular/core';
import {Aktorenlog} from "../models/aktorenlog";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-aktorenlog',
  templateUrl: './aktorenlog.component.html',
  styleUrls: ['./aktorenlog.component.css']
})
export class AktorenlogComponent implements OnInit {

  aktorenlog: Aktorenlog[] = [];


  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.http.get("http://localhost:8080/aktorenlog/all").subscribe(data => {
      this.aktorenlog = Object.values(data);
    });
  }
}
