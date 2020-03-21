import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material';
import { Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';



@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {


  constructor(private dataService: DataService, private userFeedback: MatSnackBar) {}

  sayHi(): void {
    this.dataService.sayHello().subscribe(response => {
      console.log(response)
      this.userFeedback.openFromComponent(UserActionFeedbackComponent, {
        duration: 5000,
        data: response
      });
    });
  }
}


@Component({
  selector: 'user-action-feedback',
  templateUrl: './user-action-feedback.html',
  styles: [`
    .user-action-feedback {
      color: #4797CE;
    }
  `],
})
export class UserActionFeedbackComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}


