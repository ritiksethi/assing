import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompDynamicComponent } from './add-comp-dynamic.component';

describe('AddCompDynamicComponent', () => {
  let component: AddCompDynamicComponent;
  let fixture: ComponentFixture<AddCompDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
