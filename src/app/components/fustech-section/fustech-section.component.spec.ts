import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FustechSectionComponent } from './fustech-section.component';

describe('FustechSectionComponent', () => {
  let component: FustechSectionComponent;
  let fixture: ComponentFixture<FustechSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FustechSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FustechSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
