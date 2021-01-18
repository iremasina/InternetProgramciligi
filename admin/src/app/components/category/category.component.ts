import { Component, OnInit } from '@angular/core';
import { FbServicesService } from 'src/app/services/fbServices.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title = "Kategori Düzenle";
  categories: any;
  tabloAdi="TÜM KATEGORİLER"

  constructor(
    public fbServices: FbServicesService
  ) { }

  ngOnInit(): void {
    this.CategoryListele();
  }
  CategoryListele() {
    this.fbServices.CategoryListele().snapshotChanges().pipe(

      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.categories = data;
    });
  }

}
