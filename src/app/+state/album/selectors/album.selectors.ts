import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlbumState } from '../reducer/album.reducer';

const getAlbumState = createFeatureSelector<AlbumState>('album');

const getAlbum = createSelector(
	getAlbumState,
	(state: AlbumState) => state
);

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

const getNameAlbum = createSelector(
	getAlbumState,
	(state: AlbumState) => state.name
);

export const albumSelector = {
	getAlbum,
	getTracks,
	getImages,
	getArtists,
	getNameAlbum
};
