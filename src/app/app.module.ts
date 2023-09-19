import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SecComponent } from './sec/sec.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { employeeReducer, postReducer, productsReducer, usersReducer } from './Store/store.reducer';
import { ProductsEffects } from './Store/store.effect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './users/users.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { UsersinformationComponent } from './usersinformation/usersinformation.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SecComponent,
    AboutComponent,
    UsersinformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot({products: productsReducer, users: usersReducer,
       employee: employeeReducer,post : postReducer}, {}),
    EffectsModule.forRoot([ProductsEffects]),
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    UsersComponent,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
