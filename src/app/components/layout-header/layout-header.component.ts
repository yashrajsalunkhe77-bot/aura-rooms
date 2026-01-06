import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toolbar } from 'primeng/toolbar'; 
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [CommonModule,CommonModule,AvatarModule,SharedModule,ButtonModule,Toolbar],
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent {}

export class ToolbarCustomDemo {

}