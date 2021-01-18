import { Component, OnInit } from '@angular/core';
import { FbServicesService } from '../../services/fbServices.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = "Tüm Kitaplar";
  products: any;

  constructor( 
    
    public fbServices: FbServicesService
  ) { }

  ngOnInit(): void {
    this.ProductListele();
  }
  ProductListele() {
    this.fbServices.ProductListele().snapshotChanges().pipe(

      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.products = data;
    });
    
  }
  addToCart(product){
    alert("sepete eklendi:" + product.name)
  }
}
  
