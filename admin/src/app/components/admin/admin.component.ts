import { Component, OnInit } from '@angular/core';
import { Sonuc } from './../../models/sonuc';
import { FbServicesService } from '../../services/fbServices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  sonuc: Sonuc = new Sonuc();

  constructor(
    public FbServicesService:FbServicesService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
 

  }

