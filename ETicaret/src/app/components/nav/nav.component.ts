import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FbServicesService } from 'src/app/services/fbServices.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  adSoyad: string;
  uid: string;
  ProductListele: any;

  constructor(
    public fbServices:FbServicesService,
    public router: Router
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.adSoyad = user.displayName;
    this.ProductListele();
  }
  OturumKapat() {
    this.fbServices.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['/girisYap']);
    });

  }

}
