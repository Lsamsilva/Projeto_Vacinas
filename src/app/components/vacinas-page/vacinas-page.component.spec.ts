import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinasPageComponent } from './vacinas-page.component';

describe('VacinasPageComponent', () => {
  let component: VacinasPageComponent;
  let fixture: ComponentFixture<VacinasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
