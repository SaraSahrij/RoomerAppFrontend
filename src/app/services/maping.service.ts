import {Injectable} from '@angular/core';
import {Room} from "../models/room";

@Injectable({
  providedIn: 'root'
})
export class MapingService {

  constructor() {
  }


  mapToRooms(data: any): Room[] {
    let rooms: Room[] = [];


    return rooms;
  }
}
