import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sparkInterview';
  toggleCircle: boolean = false;
  currentIndex: number = 0;
  lastIndex: number;

  showHideCircle(index: number): void {
    this.lastIndex = this.currentIndex;
    this.currentIndex = index;
  }
}
