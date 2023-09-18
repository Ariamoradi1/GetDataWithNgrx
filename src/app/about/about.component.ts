import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../facade.service';
import { Observable } from 'rxjs';
import { IUsers } from '../models/users.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  users$ : Observable<IUsers[]>
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

   constructor(private facade : FacadeService){
    this.users$ = this.facade.getUsers()
   }

  ngOnInit(): void {
    this.facade.dispatchUsers()
  }
}
