import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Admin } from '../models/admin';
import { Category } from '../models/Category';
import { Product } from '../models/Product';
import { Uyeler } from '../models/Uyeler';
import {AngularFireAuth} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class FbServicesService {
  private dbCategory = '/category';
  private dbProduct = '/product' ; 
  private dbUye='/uyeler';
  private dbAdmin='/admin';

  CategoryRef: AngularFireList<Category> = null;
  productRef: AngularFireList<Product> = null;
  uyelerRef: AngularFireList<Uyeler> = null;
  adminRef: AngularFireList<Admin>=null;

  constructor(
    public db: AngularFireDatabase,
    public afAuth:AngularFireAuth
  ) {
    this.CategoryRef = db.list(this.dbCategory);
    this.productRef = db.list(this.dbProduct);
    this.uyelerRef=db.list(this.dbUye);  
    this.adminRef=db.list(this.dbAdmin);
  }
  CategoryListele() {
    return this.CategoryRef;    
  }
  CategoryEkle(category: Category){
    return this.CategoryRef.push(category);
  }
  CategoryDuzenle(category:Category){
    return this.CategoryRef.update(category.key, category);
  }
  CategorySil(key:string){
    return this.CategoryRef.remove(key);
  }
  ProductListele(){
    return this.productRef;
  }
  ProductEkle(product: Product){
    return this.productRef.push(product);
  }
  ProductDuzenle(product :Product){
    return this.productRef.update(product.key, product);
  }
  ProductSil(key:string){
    return this.productRef.remove(key);
  }
  UyelerListele(){
    return this.uyelerRef;
  }
  OturumAc(kullanciAdi:string, parola:string){
    return this.afAuth.signInWithEmailAndPassword(kullanciAdi,parola);

  }
  OturumKapat(){
    this.afAuth.signOut();
  }
  OturumKontrol(){
    if (localStorage.getItem("user")){
      return true;}
      else{
        return false;
      }
    }
  }

