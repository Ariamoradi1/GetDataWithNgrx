import { Component, OnInit,} from '@angular/core';
import { Iproduct } from '../models/product.model';
import { Observable} from 'rxjs';
import { FacadeService } from '../facade.service';
import { Store} from '@ngrx/store';
import { selectProductsLoading } from '../Store/store.selector';


@Component({
  selector: 'app-sec',
  templateUrl: './sec.component.html',
  styleUrls: ['./sec.component.scss']
})
export class SecComponent implements OnInit {

  products$ : Observable<Iproduct[]>
  loading$ = this.store.select(selectProductsLoading)

  constructor(private store: Store, private facade: FacadeService) {
    this.products$ = this.facade.getData()
  }

  ngOnInit(): void {
    this.facade.dispatch()
  }
}
