import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { errorSearchAlbums, fetchSearchAlbums, successSearchAlbums } from '../actions/music-search.actions';
import { catchError, switchMap } from 'rxjs/operators';
import { MusicSearchServices } from '../../../services/music-search.services';
import { of } from 'rxjs';

@Injectable()
export class MusicSearchEffects {
    constructor(private actions$: Actions,
                private musicSearchServices: MusicSearchServices) {
    }

    fetchMusicSearch$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fetchSearchAlbums),
            switchMap(({ query }) => {
                return this.musicSearchServices.getAlbums(query).pipe(
                    catchError(err => of(errorSearchAlbums())));
            }),
            switchMap((response) => {
                console.log('response', response);
                return of(successSearchAlbums({ albums: response }));
            }),
        );
    });
}
