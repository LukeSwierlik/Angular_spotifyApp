import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MusicSearchServices } from '../../../services/music-search.services';
import {
	errorSearchAlbums,
	fetchSearchAlbums,
	successSearchAlbums
} from '../actions/music-search.actions';

@Injectable()
export class MusicSearchEffects {
	constructor(private actions$: Actions, private musicSearchServices: MusicSearchServices) {}

	fetchMusicSearch$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fetchSearchAlbums),
			switchMap(({ query }) => {
				return this.musicSearchServices
					.getAlbums(query)
					.pipe(catchError(err => of(errorSearchAlbums())));
			}),
			map(response => {
				console.log('response', response);

				return successSearchAlbums({ albums: response });
			})
		);
	});
}
