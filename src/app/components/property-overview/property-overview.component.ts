import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DatePicker } from 'primeng/datepicker';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

import { SelectButton } from 'primeng/selectbutton';

@Component({
  selector: 'app-property-overview',
  standalone: true,
  imports: [CommonModule,FormsModule, DatePickerModule, SelectModule , SelectButton],
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.scss']
})
export class PropertyOverviewComponent {
  date: Date = new Date();

   stateOptions: any[] = [{ label: 'Overview', value: 'over-view' },{ label: 'Chart View', value: 'chart-view' }];

    value: string = 'overview';

}
