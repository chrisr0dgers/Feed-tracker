import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NappyFormComponent } from './nappy-form.component';

describe('NappyFormComponent', () => {
  let component: NappyFormComponent;
  let fixture: ComponentFixture<NappyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NappyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NappyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
