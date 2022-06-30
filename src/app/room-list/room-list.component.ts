import {Component, OnInit} from '@angular/core';

enum RoomStatus {
  EMPTY,
  MID,
  FULL
};


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})

export class RoomListComponent implements OnInit {

  RoomStatus: typeof RoomStatus = RoomStatus;

  rooms: {
    img_url: string, description: string, status: RoomStatus }[] =
    [
      {img_url: "../../assets/img/room_1.jpeg", description: "AE01", status: RoomStatus.EMPTY},
      {img_url: "../../assets/img/room_2.webp", description: "AE02", status: RoomStatus.MID},
      {img_url: "../../assets/img/room_3.webp", description: "AE03", status: RoomStatus.FULL},
      {img_url: "../../assets/img/room_4.webp", description: "AE04", status: RoomStatus.FULL},
      {img_url: "../../assets/img/room_5.jpeg", description: "AE05", status: RoomStatus.MID},
    ];

  constructor() {
  }

  ngOnInit(): void {
  }

  getNgStyle(room: { img_url: string, description: string, status: RoomStatus }): string {
    var style = "room";
    if (room.status === RoomStatus.EMPTY) {
      style += ' empty';

    }
    if (room.status === RoomStatus.MID) {
      style += ' mid';
    }
    if (room.status === RoomStatus.FULL) {
      style += ' full';
    }
    return style;
  }
}
