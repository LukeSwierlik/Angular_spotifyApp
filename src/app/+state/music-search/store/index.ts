import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { MusicSearchState } from '../interfaces/music-search.interfaces';
import { musicSearchReducer } from '../reducer/music-search.reducers';

export interface State {
    musicSearch: MusicSearchState;
}

export const reducers: ActionReducerMap<State> = {
    musicSearch: musicSearchReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
