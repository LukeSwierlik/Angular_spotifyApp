import { createAction, props } from '@ngrx/store';
import { Item } from '../album/album.interfaces';

export const createPlaylists = createAction(
	'[Playlists] Create playlists',
	props<{ name: string }>()
);

export const addToPlaylists = createAction(
	'[Playlists] Add to playlists',
	props<{ payload: Item }>()
);

export const removeWithPlaylists = createAction(
	'[Playlists] Remove with playlists',
	props<{ payload: Item }>()
);

export const deletePlaylists = createAction(
	'[Playlists] Delete playlists',
	props<{ id: string }>()
);
