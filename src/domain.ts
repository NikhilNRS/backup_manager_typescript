class Disk {
    name: string;
    last_snapshot_date: Date;
  
    constructor(name: string, last_snapshot_date: Date) {
      this.name = name;
      this.last_snapshot_date = last_snapshot_date;
    }
  }