import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sonuc } from 'src/app/models/sonuc';
import { Uye } from 'src/app/models/uye';
import { FbServicesService } from 'src/app/services/fbServices.service';

@Component({
  selector: 'app-uye-ol',
  templateUrl: './uye-ol.component.html',
  styleUrls: ['./uye-ol.component.css']
})
export class UyeOlComponent implements OnInit {
sonuc: Sonuc= new Sonuc();
secUye: Uye=new Uye();
  constructor(
    public fbServices:FbServicesService ,
    public router: Router
  ) { }
  
  ngOnInit(): void {
  }
  KayitYap() {
    this.fbServices.UyeOl(this.secUye).then(d => {
      d.user.updateProfile({
        displayName: this.secUye.adSoyad
      }).then();
      this.secUye.uid = d.user.uid;
      localStorage.setItem("user", JSON.stringify(d.user));
      this.UyeEkle();
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Hata Oluştu Tekrar Deneyiniz!";
    });
  }
  UyeEkle() {
    this.fbServices.UyeEkle(this.secUye).then(d => {
      this.router.navigate(['/']);
    });
  }


}
