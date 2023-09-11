import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecComponent } from './sec/sec.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path:'', component:SecComponent},

  {path: 'about',component:AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
