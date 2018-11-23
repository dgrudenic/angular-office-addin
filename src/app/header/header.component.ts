import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  show = false;

  toggleCollapse() {
    this.show = !this.show;
  }

  onClose() {
    this.show = false;
  }
}
