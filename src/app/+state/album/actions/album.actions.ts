import { createAction, props } from '@ngrx/store';
import { AlbumPayload } from '../album.interfaces';

export const fetchAlbum = createAction('[Album] Fetch Album', props<{ albumId: string }>());

export const successAlbum = createAction(
	'[Album] Success Album',
	props<{ payload: AlbumPayload }>()
);

export const errorAlbum = createAction('[Album] Error Album');
