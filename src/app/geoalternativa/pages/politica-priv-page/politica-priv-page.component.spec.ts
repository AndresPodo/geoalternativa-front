import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaPrivPageComponent } from './politica-priv-page.component';

describe('PoliticaPrivPageComponent', () => {
  let component: PoliticaPrivPageComponent;
  let fixture: ComponentFixture<PoliticaPrivPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticaPrivPageComponent]
    });
    fixture = TestBed.createComponent(PoliticaPrivPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
