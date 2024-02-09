import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent2 } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent2;
  let fixture: ComponentFixture<MainComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent2]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
