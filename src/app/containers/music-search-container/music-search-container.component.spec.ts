import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSearchContainerComponent } from './music-search-container.component';

describe('MusicSearchContainerComponent', () => {
  let component: MusicSearchContainerComponent;
  let fixture: ComponentFixture<MusicSearchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicSearchContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
