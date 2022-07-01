import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktorenlogComponent } from './aktorenlog.component';

describe('AktorenlogComponent', () => {
  let component: AktorenlogComponent;
  let fixture: ComponentFixture<AktorenlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktorenlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AktorenlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
