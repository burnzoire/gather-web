import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicNavComponent } from './topic-nav.component';

describe('TopicNavComponent', () => {
  let component: TopicNavComponent;
  let fixture: ComponentFixture<TopicNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
