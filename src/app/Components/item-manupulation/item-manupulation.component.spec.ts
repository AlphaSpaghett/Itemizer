import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManupulationComponent } from './item-manupulation.component';

describe('ItemManupulationComponent', () => {
  let component: ItemManupulationComponent;
  let fixture: ComponentFixture<ItemManupulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemManupulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemManupulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
