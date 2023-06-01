import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegNewStudenteComponent } from './reg-new-studente.component';

describe('RegNewStudenteComponent', () => {
  let component: RegNewStudenteComponent;
  let fixture: ComponentFixture<RegNewStudenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegNewStudenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegNewStudenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
