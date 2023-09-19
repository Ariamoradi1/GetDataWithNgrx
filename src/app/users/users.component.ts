import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { FacadeService } from '../facade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UsersComponent {
  userNameControl = new FormControl('', [
    Validators.pattern('^[a-z0-9_-]{4,15}$'),
  ]);
  emailControl = new FormControl('', [
    Validators.pattern('[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+'),
  ]);
  lastNameValue = new FormControl('', [Validators.minLength(4)]);
  ageValue = new FormControl('', [Validators.required]);
  count: string = '0';

  constructor(private facade: FacadeService, private route: Router) {}

  clickHandler() {
    if (
      !this.emailControl.valid ||
      !this.userNameControl.valid ||
      !this.ageValue.valid ||
      !this.lastNameValue
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    } else {
      const myObj = {
        id: Math.floor(Math.random() * 6),
        name: this.userNameControl.value,
        lastName: this.lastNameValue.value,
        email: this.emailControl.value,
        age: this.ageValue.value,
      };

      this.facade.dispatchAdd(myObj);

      Swal.fire({
        title:
          'Your Information seccessfuly Send!,You will be transferred to the list of users in five seconds!',
        icon: 'success',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });

      setTimeout(() => {
        this.route.navigate(['/usersInformation']);
      }, 5000);
    }
  }
}
