import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProfileCardComponent } from './team-profile-card.component';

describe('TeamProfileCardComponent', () => {
  let component: TeamProfileCardComponent;
  let fixture: ComponentFixture<TeamProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamProfileCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
