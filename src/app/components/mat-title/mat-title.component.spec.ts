import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTitleComponent } from './mat-title.component';

describe('MatTitleComponent', () => {
  let component: MatTitleComponent;
  let fixture: ComponentFixture<MatTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
