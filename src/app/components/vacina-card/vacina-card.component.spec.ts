import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinaCardComponent } from './vacina-card.component';

describe('VacinaCardComponent', () => {
  let component: VacinaCardComponent;
  let fixture: ComponentFixture<VacinaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
