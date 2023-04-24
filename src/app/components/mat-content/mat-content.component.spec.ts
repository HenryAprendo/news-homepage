import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatContentComponent } from './mat-content.component';

describe('MatContentComponent', () => {
  let component: MatContentComponent;
  let fixture: ComponentFixture<MatContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
