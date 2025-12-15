import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Room {
  number: number;
  type: string;
  status: 'cleaned' | 'dirty' | 'inspect' | 'progress';
  tag?: 'DND' | 'MUR';
}

@Component({
  selector: 'app-floor-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floor-list.component.html',
  styleUrls: ['./floor-list.component.scss']
})
export class FloorListComponent {

  floors = [
    {
      floor: 1,
      summary: '10 Rooms — 5 Cleaned, 3 Dirty, 2 Inspect',
      rooms: [
        { number: 1200, type: 'Deluxe', status: 'cleaned' },
        { number: 1200, type: 'Deluxe', status: 'dirty', tag: 'DND' },
        { number: 1200, type: 'Deluxe', status: 'inspect' },
        { number: 1200, type: 'Deluxe', status: 'progress' },
      ]
    },
    {
      floor: 2,
      summary: '8 Rooms — 7 Cleaned, 1 Inspect',
      rooms: [
        { number: 1101, type: 'Deluxe', status: 'cleaned' },
        { number: 1102, type: 'Deluxe', status: 'inspect' }
      ]
    }
  ];

}
