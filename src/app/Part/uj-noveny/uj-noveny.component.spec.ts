import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjNovenyComponent } from './uj-noveny.component';

describe('UjNovenyComponent', () => {
  let component: UjNovenyComponent;
  let fixture: ComponentFixture<UjNovenyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UjNovenyComponent]
    });
    fixture = TestBed.createComponent(UjNovenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
