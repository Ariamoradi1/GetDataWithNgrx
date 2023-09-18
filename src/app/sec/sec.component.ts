import { Component, OnInit, signal,} from '@angular/core';
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
  sig = signal(5)
  products$ : Observable<Iproduct[]>
  loading$: Observable<boolean> = this.store.select(selectProductsLoading)

  constructor(private store: Store, private facade: FacadeService) {
    this.products$ = this.facade.getData()
  }

  ngOnInit(): void {
    this.facade.dispatch()
    this.sig.update((data) => data + 2)
    console.log(this.sig())
    const arr = [4,3,3,2]
    const aria = (arr:number[]) => {
      return arr.map(item => item + 5)
    }
    console.log(aria(arr))
  }
}
