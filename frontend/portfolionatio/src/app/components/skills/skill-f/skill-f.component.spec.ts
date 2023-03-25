import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillFComponent } from './skill-f.component';

describe('SkillFComponent', () => {
  let component: SkillFComponent;
  let fixture: ComponentFixture<SkillFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
