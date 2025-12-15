import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomService } from '../../core/services/room.service';
import { RoomCardComponent } from '../room-card/room-card.component';

@Component({
  selector: 'app-floor-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floor-list.component.html',
  styleUrls: ['./floor-list.component.scss']
})
export class FloorListComponent {
  floors = [1, 2, 3, 4 ];
  roomsMap = new Map<number, any[]>();

  constructor(private rs: RoomService) {
    this.rs.rooms$.subscribe(rooms => {
      this.roomsMap.clear();
      rooms.forEach(r => {
        if (!this.roomsMap.has(r.floor)) this.roomsMap.set(r.floor, []);
        this.roomsMap.get(r.floor)!.push(r);
      });
    });
  }
}