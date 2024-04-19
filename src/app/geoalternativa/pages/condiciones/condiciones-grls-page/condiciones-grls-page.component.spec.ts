import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesGrlsPageComponent } from './condiciones-grls-page.component';

describe('CondicionesGrlsPageComponent', () => {
  let component: CondicionesGrlsPageComponent;
  let fixture: ComponentFixture<CondicionesGrlsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondicionesGrlsPageComponent]
    });
    fixture = TestBed.createComponent(CondicionesGrlsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
