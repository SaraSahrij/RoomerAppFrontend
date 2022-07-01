import {Component, OnInit} from '@angular/core';
import {Room, RoomStatus} from "../models/room";
import {RoomService} from "../services/room.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})


export class RoomListComponent implements OnInit {

  RoomStaus: typeof RoomStatus = RoomStatus;

  rooms: Room[] = [];

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.http.get("http://localhost:8080/raum/all").subscribe(data => {
      this.rooms = Object.values(data);
      this.rooms[0].img_url = "../../assets/img/room_1.jpeg";
      this.rooms[1].img_url = "../../assets/img/room_2.webp";
      this.rooms[2].img_url = "../../assets/img/room_3.webp";
      this.rooms[3].img_url = "../../assets/img/room_4.webp";
      this.rooms[5].img_url = "../../assets/img/room_5.jpeg";
    });
  }

  getNgStyle(room: Room): string {
    var style = "room";

    if (room.roomStatus === RoomStatus.EMPTY) {
      style += ' empty';

    }
    if (room.roomStatus === RoomStatus.MID) {
      style += ' mid';
    }
    if (room.roomStatus === RoomStatus.FULL) {
      style += ' full';
    }
    return style;
  }
}
