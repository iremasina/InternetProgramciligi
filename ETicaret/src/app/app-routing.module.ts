import { CategoryComponent } from './components/category/category.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { UyeGirisComponent } from './components/uye-giris/uye-giris.component';
import { UyeOlComponent } from './components/uye-ol/uye-ol.component';
import { SepetimComponent } from './components/sepetim/sepetim.component';



const routes: Routes = [
  {path:'category', component: CategoryComponent},
  {path:'product', component: ProductComponent},
  {path:'uyeGiris', component: UyeGirisComponent},
  {path:'uyeOl', component: UyeOlComponent},
  {path:'sepetim', component: SepetimComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
