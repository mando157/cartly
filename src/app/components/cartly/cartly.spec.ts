import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cartly } from './cartly';

describe('Cartly', () => {
  let component: Cartly;
  let fixture: ComponentFixture<Cartly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cartly],
    }).compileComponents();

    fixture = TestBed.createComponent(Cartly);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
