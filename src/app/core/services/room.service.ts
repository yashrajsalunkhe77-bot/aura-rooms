import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({ providedIn: 'root' })
export class RoomService {
  private _rooms = new BehaviorSubject<Room[]>(this.mockData());
  rooms$ = this._rooms.asObservable();

  constructor() {}

  private mockData(): Room[] {
    return [
      { id: '1', number: '1200', type: 'Deluxe', floor: 1, status: 'cleaned', tags: [] },
      { id: '2', number: '1200', type: 'Deluxe', floor: 1, status: 'dirty', tags: ['DND'] },
      { id: '3', number: '1200', type: 'Deluxe', floor: 2, status: 'inspect', tags: [] },
      { id: '4', number: '1200', type: 'Deluxe', floor: 2, status: 'in-progress', tags: [] }
    ];
  }
}
