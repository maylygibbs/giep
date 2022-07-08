import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-dashboard-regular',
  templateUrl: './dashboard-regular.component.html',
  styleUrls: ['./dashboard-regular.component.scss']
})
export class DashboardRegularComponent implements OnInit {

  user!:any;

  constructor() { }

  ngOnInit(): void {
    const info = localStorage.getItem('user') || null;
    this.user = info ? JSON.parse(info) : null;
  }

}
