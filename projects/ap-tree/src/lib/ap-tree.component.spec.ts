import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApTreeComponent } from './ap-tree.component';

describe('ApTreeComponent', () => {
  let component: ApTreeComponent;
  let fixture: ComponentFixture<ApTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
