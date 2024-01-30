import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoLegalPageComponent } from './aviso-legal-page.component';

describe('AvisoLegalPageComponent', () => {
  let component: AvisoLegalPageComponent;
  let fixture: ComponentFixture<AvisoLegalPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisoLegalPageComponent]
    });
    fixture = TestBed.createComponent(AvisoLegalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
