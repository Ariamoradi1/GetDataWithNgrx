import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../facade.service';

@Component({
  selector: 'app-usersinformation',
  templateUrl: './usersinformation.component.html',
  styleUrls: ['./usersinformation.component.scss']
})

export class UsersinformationComponent implements OnInit {
  users$ : any
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','age'];

  constructor(private facade: FacadeService){
    this.users$ = this.facade.getEmployees()
  }

  ngOnInit(): void {
   this.facade.dispatchEmployee()
  }
}
