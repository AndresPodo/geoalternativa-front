import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesDomesticoComponent } from './condiciones-domestico.component';

describe('CondicionesDomesticoComponent', () => {
  let component: CondicionesDomesticoComponent;
  let fixture: ComponentFixture<CondicionesDomesticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondicionesDomesticoComponent]
    });
    fixture = TestBed.createComponent(CondicionesDomesticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
