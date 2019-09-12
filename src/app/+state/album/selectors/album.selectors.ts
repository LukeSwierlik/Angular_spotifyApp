import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlbumState } from '../reducer/album.reducer';

const getAlbumState = createFeatureSelector<AlbumState>('album');

const getTracks = createSelector(
	getAlbumState,
	(state: AlbumState) => state.tracks
);

const getImages = createSelector(
	getAlbumState,
	(state: AlbumState) => state.images
);

const getArtists = createSelector(
	getAlbumState,
	(state: AlbumState) => state.artists
);

export const albumSelector = {
	getTracks,
	getImages,
	getArtists
};
