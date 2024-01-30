import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesPageComponent } from './promociones-page.component';

describe('PromocionesPageComponent', () => {
  let component: PromocionesPageComponent;
  let fixture: ComponentFixture<PromocionesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromocionesPageComponent]
    });
    fixture = TestBed.createComponent(PromocionesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
