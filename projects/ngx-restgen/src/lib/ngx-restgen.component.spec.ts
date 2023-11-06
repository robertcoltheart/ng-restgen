import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxRestgenComponent } from './ngx-restgen.component';

describe('NgxRestgenComponent', () => {
  let component: NgxRestgenComponent;
  let fixture: ComponentFixture<NgxRestgenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxRestgenComponent]
    });
    fixture = TestBed.createComponent(NgxRestgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
