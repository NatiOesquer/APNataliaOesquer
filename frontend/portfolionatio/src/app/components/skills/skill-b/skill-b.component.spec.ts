import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBComponent } from './skill-b.component';

describe('SkillBComponent', () => {
  let component: SkillBComponent;
  let fixture: ComponentFixture<SkillBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
