export enum RoomStatus {
  EMPTY= "EMPTY",
  MID= "MID",
  FULL = "FULL"
};


export class Room {
  id: number;
  aktuelleAuslastung: number;
  roomStatus: RoomStatus;
  kapazitaet: number;
  description: string;
  img_url: string;

  constructor(id: number, aktuelleAuslastung: number, roomStatus: RoomStatus, kapazitaet: number, description: string, img_url: string) {
    this.id = id;
    this.aktuelleAuslastung = aktuelleAuslastung;
    this.roomStatus = roomStatus;
    this.kapazitaet = kapazitaet;
    this.description = description;
    this.img_url = img_url;
  }
};
