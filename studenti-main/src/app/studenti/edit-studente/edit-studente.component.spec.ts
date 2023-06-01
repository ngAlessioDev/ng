import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudenteComponent } from './edit-studente.component';

describe('EditStudenteComponent', () => {
  let component: EditStudenteComponent;
  let fixture: ComponentFixture<EditStudenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStudenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
