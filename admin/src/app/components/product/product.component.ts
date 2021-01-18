import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FbServicesService } from 'src/app/services/fbServices.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   title = "Tüm Kitaplar";
   products: any;
   urunBaslik="ÜRÜN DÜZENLE"

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
}
  