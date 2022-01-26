import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
  pageDate: string = 'Today is';

  getTodayDate(): string {
    let currentDate = new Date();

    return (
      currentDate.getDate() +
      '-' +
      (currentDate.getMonth() + 1) +
      '-' +
      currentDate.getFullYear()
    );
  }
}
