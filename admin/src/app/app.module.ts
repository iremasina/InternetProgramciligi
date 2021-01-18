import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { UyelerComponent } from './components/uyeler/uyeler.component';
import {AngularFireModule} from '@angular/fire';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    CategoryComponent,    
    UyelerComponent,
    AdminComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
