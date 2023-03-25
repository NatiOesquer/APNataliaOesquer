import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSComponent } from './skill-s.component';

describe('SkillSComponent', () => {
  let component: SkillSComponent;
  let fixture: ComponentFixture<SkillSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
