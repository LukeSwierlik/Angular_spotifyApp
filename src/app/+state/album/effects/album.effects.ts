import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { AlbumService } from '../../../services/album.service';
import { fetchAlbum, successAlbum } from '../actions/album.actions';
import { AlbumPayload } from '../album.interfaces';

@Injectable()
export class AlbumEffects {
	constructor(private actions$: Actions, private albumService: AlbumService) {}

	fetchAlbum$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fetchAlbum),
			switchMap(({ albumId }) => {
				console.log('albumId', albumId);

				return this.albumService.getAlbum(albumId);
			}),
			map((payload: AlbumPayload) => {
				console.log('payload', payload);

				return successAlbum({
					payload
				});
			})
		);
	});
}
