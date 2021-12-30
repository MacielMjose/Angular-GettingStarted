import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div>
    <h1>{{ pageTitle +" "+ getTodayDate()}}</h1>
    <pm-products></pm-products>
  </div>`,
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
  pageDate: string = 'Today is';

  getTodayDate(): string {
    let currentDate = new Date();

    return currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getFullYear();
  }
}
