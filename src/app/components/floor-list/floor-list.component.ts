import { Component } from '@angular/core';


@Component({
  selector: 'app-floor-list',
  standalone: true,
  
  templateUrl: './floor-list.component.html',
  styleUrls: ['./floor-list.component.scss'],
})
export class FloorListComponent {

  floors = [
    {
      number: 1,
      summary: '10 Rooms\n5 Cleaned, 3 Dirty, 2 Inspect',

      rooms: [
        { no: '1200', type: 'Deluxe', status: 'cleaned',statusText: 'DND' },
        { no: '1200', type: 'Deluxe', status: 'dirty' },
        { no: '1200', type: 'Deluxe', status: 'inspect' },
        { no: '1200', type: 'Deluxe', status: 'cleaned',statusText: 'DND' },
        { no: '1200', type: 'Deluxe', status: 'dirty' ,statusText: 'DND'},
        { no: '1200', type: 'Deluxe', status: 'dirty',statusText: 'DND' },
        { no: '1200', type: 'Deluxe', status: 'cleaned' },
        { no: '1200', type: 'Deluxe', status: 'cleaned' },
        { no: '1200', type: 'Deluxe', status: 'inspect',statusText: 'DND' },
        { no: '1200', type: 'Deluxe', status: 'cleaned' ,statusText: 'DND'},
      ]
    },
    {
      number: 1,
      summary: '8 Rooms\n7 Cleaned, 1 Inspect',

      rooms: [
        { no: '1200', type: 'Deluxe', status: 'cleaned' },
        { no: '1200', type: 'Deluxe', status: 'cleaned' },
        { no: '1200', type: 'Deluxe', status: 'cleaned' },
        { no: '1200', type: 'Deluxe', status: 'cleaned' },
        { no: '1200', type: 'Deluxe', status: 'cleaned',statusText: 'DND' },
        { no: '1200', type: 'Deluxe', status: 'cleaned' },
        { no: '1200', type: 'Deluxe', status: 'inspect',statusText: 'DND' },
        { no: '1200', type: 'Deluxe', status: 'cleaned' },
      ]
    },
    {
      number: 1,
     summary: '7 Rooms\n4 Cleaned, 3 Dirty',

      rooms: [
        { no: '1200', type: 'Deluxe', status: 'cleaned'},
        { no: '1200', type: 'Deluxe', status: 'dirty' },
        { no: '1200', type: 'Deluxe', status: 'cleaned' },
        { no: '1200', type: 'Deluxe', status: 'dirty' },
        { no: '1200', type: 'Deluxe', status: 'cleaned', },
        { no: '1200', type: 'Deluxe', status: 'cleaned' },
        { no: '1200', type: 'Deluxe', status: 'dirty' ,statusText: 'DND'},
      ]
    }
  ];

}
