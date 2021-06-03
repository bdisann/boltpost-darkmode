import { Component, OnInit } from '@angular/core';
import {
  faCommentDollar,
  faCreditCard,
  faSearch,
  faShippingFast,
  faUserCircle,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  faCreditCard = faCreditCard;
  faUserCircle = faUserCircle;
  faShipingFast = faShippingFast;
  faUserCog = faUserCog;
  faCommentDollar = faCommentDollar;
  faSearch = faSearch;
  toggleNav = false;
  darkMode = true;

  constructor() {}

  ngOnInit(): void {}

  handleToggleDarkMode(toggleActive: boolean) {
    this.darkMode = toggleActive;
  }
}
