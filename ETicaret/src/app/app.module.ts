import { CategoryComponent } from './components/category/category.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './components/product/product.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import {FormsModule} from '@angular/Forms';
import { UyeGirisComponent } from './components/uye-giris/uye-giris.component';
import { UyeOlComponent } from './components/uye-ol/uye-ol.component';
import { SepetimComponent } from './components/sepetim/sepetim.component';
import { RegisterComponent } from './components/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NavComponent,
    ProductComponent,
    UyeGirisComponent,
    UyeOlComponent,
    SepetimComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule

  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
