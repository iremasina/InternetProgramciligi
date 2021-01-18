import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FbServicesService } from '../../services/fbServices.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title = "Tüm Kategoriler";
  categories: any;

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
