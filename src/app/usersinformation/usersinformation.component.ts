import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { myUsers } from '../models/myUsers.model';
import { FacadeService } from '../facade.service';
@Component({
  selector: 'app-usersinformation',
  templateUrl: './usersinformation.component.html',
  styleUrls: ['./usersinformation.component.scss']
})
export class UsersinformationComponent implements OnInit {
  users$ : any
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private facade: FacadeService){
    this.users$ = this.facade.getEmployees()
  }

  ngOnInit(): void {
   this.facade.dispatchEmployee()
   console.log(this.users$)
  }
}
