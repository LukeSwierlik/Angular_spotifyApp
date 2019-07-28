import { createAction, props } from '@ngrx/store';
import { Albums } from '../interfaces/music-search.interfaces';

export const fetchSearchAlbums = createAction(
    '[Music Search] Fetch Search Albums',
    props<{ query: string; }>()
);

export const successSearchAlbums = createAction(
    '[Music Search] Success Search Albums',
    props<{ albums: Albums; }>()
);

export const errorSearchAlbums = createAction(
    '[Music Search] Error Search Albums'
);
