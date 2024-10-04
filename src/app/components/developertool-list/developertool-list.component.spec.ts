import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopertoolListComponent } from './developertool-list.component';

describe('DevelopertoolListComponent', () => {
  let component: DevelopertoolListComponent;
  let fixture: ComponentFixture<DevelopertoolListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopertoolListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopertoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
