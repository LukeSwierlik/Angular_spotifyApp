import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { albumReducer, AlbumState } from './album/reducer/album.reducer';
import { MusicSearchState } from './music-search/interfaces/music-search.interfaces';
import { musicSearchReducer } from './music-search/reducer/music-search.reducers';

export interface State {
	musicSearch: MusicSearchState;
	album: AlbumState;
}

export const reducers: ActionReducerMap<State> = {
	musicSearch: musicSearchReducer,
	album: albumReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
