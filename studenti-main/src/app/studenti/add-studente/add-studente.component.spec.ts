import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudenteComponent } from './add-studente.component';

describe('AddStudenteComponent', () => {
  let component: AddStudenteComponent;
  let fixture: ComponentFixture<AddStudenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
