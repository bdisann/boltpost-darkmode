import { Component, Input, OnInit } from '@angular/core';
import { faCaretDown, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent implements OnInit {
  @Input() nameNav: string = 'Home';
  @Input() iconName = faHome;
  @Input() hasSecond: any;
  @Input() darkMode: boolean;
  secondIconName = faCaretDown;
  constructor() {}

  ngOnInit(): void {}
}
