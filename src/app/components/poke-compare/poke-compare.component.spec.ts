import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCompareComponent } from './poke-compare.component';

describe('PokeCompareComponent', () => {
  let component: PokeCompareComponent;
  let fixture: ComponentFixture<PokeCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
