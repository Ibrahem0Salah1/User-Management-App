import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() users: any[] = [];

  @Output() foundUser = new EventEmitter();

  detectID(event: any) {
    this.foundUser.emit(event);
  }
}
