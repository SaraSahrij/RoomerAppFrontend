export class Aktorenlog {
  id: number;
  struktur: string;
  aktion: string;
  zeit: Date;

  constructor(id: number, struktur: string, aktion: string, zeit: Date) {
    this.id = id;
    this.struktur = struktur;
    this.aktion = aktion;
    this.zeit = zeit;
  }
}
