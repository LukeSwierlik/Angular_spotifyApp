import { createReducer, on } from '@ngrx/store';
import {
	errorSearchAlbums,
	fetchSearchAlbums,
	successSearchAlbums
} from '../actions/music-search.actions';
import { albumsEntityAdapter, MusicSearchState } from '../interfaces/music-search.interfaces';

const initialState: MusicSearchState = {
	albums: albumsEntityAdapter.getInitialState({
		href: '',
		limit: 0,
		next: null,
		offset: 0,
		previous: null,
		total: 0
	}),
	error: false,
	loading: false
};

export const musicSearchReducer = createReducer(
	initialState,
	on(fetchSearchAlbums, state => ({
		...state,
		loading: true
	})),
	on(successSearchAlbums, (state, action) => {
		const { href, limit, next, offset, previous, total, items } = action.albums;

		return {
			...state,
			albums: albumsEntityAdapter.addAll(items, {
				...state.albums,
				href,
				limit,
				next,
				offset,
				previous,
				total
			}),
			loading: false
		};
	}),
	on(errorSearchAlbums, state => ({
		...state,
		loading: false,
		error: true
	}))
);
