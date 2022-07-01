import {Room} from "./room";

export class Building {
  id: number;
  aktuelleAuslastung: number;
  name: string;
  rooms: Room[];


  constructor(id: number, aktuelleAuslastung: number, name: string, rooms: Room[]) {
    this.id = id;
    this.aktuelleAuslastung = aktuelleAuslastung;
    this.name = name;
    this.rooms = rooms;
  }
}
