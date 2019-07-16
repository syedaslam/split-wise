import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabAddExpenseComponent } from './fab-add-expense.component';

describe('FabAddExpenseComponent', () => {
  let component: FabAddExpenseComponent;
  let fixture: ComponentFixture<FabAddExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabAddExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabAddExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
