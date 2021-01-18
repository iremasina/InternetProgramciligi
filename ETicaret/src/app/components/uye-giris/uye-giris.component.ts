import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sonuc } from 'src/app/models/sonuc';
import { FbServicesService } from 'src/app/services/fbServices.service';

@Component({
  selector: 'app-uye-giris',
  templateUrl: './uye-giris.component.html',
  styleUrls: ['./uye-giris.component.css']
})
export class UyeGirisComponent implements OnInit {
 sonuc: Sonuc=new Sonuc();
  constructor(
    public fbServices:FbServicesService,
    public router: Router
  ) { }
  

  ngOnInit(): void {
  }
  GirisYap(mail:string, sifre:string){

    this.fbServices.OturumAc(mail,sifre).then(d=>{
      localStorage.setItem("user",JSON.stringify(d.user));
      this.router.navigate(['/']);

    }, err=>{
      this.sonuc.islem=false;
      this.sonuc.mesaj="Giriş Hatalı!";
    })
  }

}
