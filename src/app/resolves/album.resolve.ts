import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../+state';
import { fetchAlbum } from '../+state/album/actions/album.actions';

@Injectable()
export class AlbumResolve implements Resolve<any> {
	constructor(private store: Store<State>) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		const albumId = route.params.album_id;

		this.store.dispatch(fetchAlbum({ albumId }));

		return true;
	}
}
