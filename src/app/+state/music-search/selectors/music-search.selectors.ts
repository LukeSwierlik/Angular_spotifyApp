import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
	albumsEntityAdapter,
	AlbumsState,
	MusicSearchState
} from '../interfaces/music-search.interfaces';

const getMusicSearchState = createFeatureSelector<MusicSearchState>('musicSearch');

const getAlbums = createSelector(
	getMusicSearchState,
	(state: MusicSearchState) => state.albums
);

const getLoading = createSelector(
	getMusicSearchState,
	(state: MusicSearchState) => state.loading
);

const { selectAll, selectEntities, selectIds, selectTotal } = albumsEntityAdapter.getSelectors();

const getAllAlbums = createSelector(
	getAlbums,
	(albums: AlbumsState) => selectAll(albums)
);

export const musicSearchSelectors = {
	getAllAlbums,
	getLoading
};
