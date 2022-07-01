export enum RoomStatus {
  EMPTY = "EMPTY",
  MID = "MID",
  FULL = "FULL"
};


export class Room {
  id: number;
  name: string;
  aktuelleAuslastung: number;
  roomStatus: RoomStatus;
  kapazitaet: number;
  description: string;
  img_url: string;

  constructor(id: number, name: string, aktuelleAuslastung: number, roomStatus: RoomStatus, kapazitaet: number, description: string, img_url: string) {
    this.id = id;
    this.name = name;
    this.aktuelleAuslastung = aktuelleAuslastung;
    this.roomStatus = roomStatus;
    this.kapazitaet = kapazitaet;
    this.description = description;
    this.img_url = img_url;
  }
};
