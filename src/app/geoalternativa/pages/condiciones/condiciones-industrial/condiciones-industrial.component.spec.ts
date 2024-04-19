import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesIndustrialComponent } from './condiciones-industrial.component';

describe('CondicionesIndustrialComponent', () => {
  let component: CondicionesIndustrialComponent;
  let fixture: ComponentFixture<CondicionesIndustrialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondicionesIndustrialComponent]
    });
    fixture = TestBed.createComponent(CondicionesIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
