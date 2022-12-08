import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSampleComponentComponent } from './ngx-sample-component.component';

describe('NgxSampleComponentComponent', () => {
  let component: NgxSampleComponentComponent;
  let fixture: ComponentFixture<NgxSampleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSampleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
