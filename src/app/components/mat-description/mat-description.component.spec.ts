import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDescriptionComponent } from './mat-description.component';

describe('MatDescriptionComponent', () => {
  let component: MatDescriptionComponent;
  let fixture: ComponentFixture<MatDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
