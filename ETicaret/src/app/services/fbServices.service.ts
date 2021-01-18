import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { category } from '../components/category/category';
import { product } from '../components/product/product';
import { Uye } from '../models/uye';
import {AngularFireAuth} from '@angular/fire/auth'


@Injectable({
  providedIn: 'root'
})
export class FbServicesService {
  private dbCategory = '/category';
  private dbProduct = '/product' ; 
  private dbUye='uye';

  categoryRef: AngularFireList<category> = null;
  productRef: AngularFireList<product> = null;
  uyeRef: AngularFireList<Uye> = null;
  UyeEkle: any;
 

  constructor(
    public db: AngularFireDatabase,
    public afAuth:AngularFireAuth
  ) {
    this.categoryRef = db.list(this.dbCategory);
    this.productRef = db.list(this.dbProduct);
    this.uyeRef = db.list(this.dbUye);
    
  }
  CategoryListele() {
    return this.categoryRef;
    
  }
  ProductListele(){
    return this.productRef;
  }
  OturumAc(mail:string, sifre:string){
    return this.afAuth.signInWithEmailAndPassword(mail,sifre);


  }
  OturumKapat(){
    this.afAuth.signOut();

  }
  OturumKontrol(){
    if (localStorage.getItem("user")){
      return true;
    }else {
      return false;
    }

  }
  UyeOl(uye:Uye){
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.sifre);

  }
  uyeEkle(uye:Uye){
    return this.uyeRef.push(uye);
  }
}
