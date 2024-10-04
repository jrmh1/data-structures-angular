import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopspecipicationsListComponent } from './laptopspecipications-list.component';

describe('LaptopspecipicationsListComponent', () => {
  let component: LaptopspecipicationsListComponent;
  let fixture: ComponentFixture<LaptopspecipicationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopspecipicationsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopspecipicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
