import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-mode',
  templateUrl: './toggle-mode.component.html',
  styleUrls: ['./toggle-mode.component.scss'],
})
export class ToggleModeComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  toggleActive: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  handleToggle() {
    this.toggleActive = !this.toggleActive;
    this.toggle.emit(this.toggleActive);
  }
}
