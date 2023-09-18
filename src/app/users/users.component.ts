import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone:true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule,
    MatCardModule,MatButtonModule,FormsModule,ReactiveFormsModule],
})
export class UsersComponent {
   userNameControl = new FormControl('',[Validators.pattern('^[a-z0-9_-]{4,15}$')])
   emailControl = new FormControl('',[Validators.pattern('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+')])

   constructor(){}

   clickHandler(){
    if (!this.emailControl.valid || !this.userNameControl.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }else{
      alert('ok')
    }
   }
}
