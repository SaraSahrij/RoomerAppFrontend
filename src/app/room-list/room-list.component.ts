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
  /*
  rooms: any =
    [
      {img_url: "../../assets/img/room_1.jpeg", description: "AE01", status: RoomStatus.EMPTY},
      {img_url: "../../assets/img/room_2.webp", description: "AE02", status: RoomStatus.MID},
      {img_url: "../../assets/img/room_3.webp", description: "AE03", status: RoomStatus.FULL},
      {img_url: "../../assets/img/room_4.webp", description: "AE04", status: RoomStatus.FULL},
      {img_url: "../../assets/img/room_5.jpeg", description: "AE05", status: RoomStatus.MID},
    ];
   */
  rooms: Room[] = [];

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.http.get("http://localhost:8080/raum/all").subscribe(data => {
      this.rooms = Object.values(data);
      this.rooms.forEach((room: any) => {
        room.img_url = "../../assets/img/room_1.jpeg";
      })
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
