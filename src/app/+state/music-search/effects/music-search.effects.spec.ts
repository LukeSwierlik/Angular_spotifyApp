import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MusicSearchEffects } from './music-search.effects';

describe('MusicSearchEffects', () => {
  let actions$: Observable<any>;
  let effects: MusicSearchEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MusicSearchEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<MusicSearchEffects>(MusicSearchEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
