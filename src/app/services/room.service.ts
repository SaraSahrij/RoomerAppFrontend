import {Injectable} from '@angular/core';
import {Room} from "../models/room";
import {HttpClient} from "@angular/common/http";
import {MapingService} from "./maping.service";

@Injectable({
  providedIn: 'root'
})
export class RoomService {


  constructor(private http: HttpClient,
              private mapingService: MapingService) {
  }


}
