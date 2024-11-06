import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritiesDiolougeComponent } from './priorities-diolouge.component';

describe('PrioritiesDiolougeComponent', () => {
  let component: PrioritiesDiolougeComponent;
  let fixture: ComponentFixture<PrioritiesDiolougeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrioritiesDiolougeComponent]
    });
    fixture = TestBed.createComponent(PrioritiesDiolougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
