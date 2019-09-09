import { createReducer, on } from '@ngrx/store';
import { fetchAlbum, successAlbum } from '../actions/album.actions';
import { Artist, Image, Tracks } from '../album.interfaces';

export interface AlbumState {
	tracks: Tracks;
	images: Image[];
	artists: Artist[];
	error: boolean;
	loading: boolean;
}

export const initialState: AlbumState = {
	tracks: {
		href: '',
		items: [],
		limit: 0,
		next: '',
		offset: 0,
		previous: '',
		total: 0
	},
	artists: [],
	images: [],
	error: false,
	loading: false
};

export const albumReducer = createReducer(
	initialState,
	on(fetchAlbum, state => ({
		...state,
		loading: true
	})),
	on(successAlbum, (state, action) => {
		console.log('payload', action.payload);
		const { tracks, artists, images } = action.payload;

		return {
			...state,
			tracks,
			artists,
			images,
			loading: false
		};
	})
);
