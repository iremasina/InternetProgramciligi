import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UyeGirisComponent } from './uye-giris.component';

describe('UyeGirisComponent', () => {
  let component: UyeGirisComponent;
  let fixture: ComponentFixture<UyeGirisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyeGirisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeGirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
