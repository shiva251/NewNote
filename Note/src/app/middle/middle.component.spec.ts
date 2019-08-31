import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleComponent } from './middle.component';
// import { TruncatePipe } from '../exponential-strength.pipe';


describe('MiddleComponent', () => {
  let component: MiddleComponent;
  let fixture: ComponentFixture<MiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MiddleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
