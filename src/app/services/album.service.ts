import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlbumPayload, AlbumResponse } from '../+state/album/album.interfaces';
import { keysToCamel } from './helpers';

@Injectable({
	providedIn: 'root'
})
export class AlbumService {
	constructor(private httpClient: HttpClient) {}

	public getAlbum(albumId: string): Observable<AlbumPayload> {
		const url = `https://api.spotify.com/v1/albums/${albumId}`;

		return this.httpClient.get<AlbumResponse>(url).pipe(
			map(keysToCamel),
			map(({ tracks, artists, images }) => ({
				tracks,
				artists,
				images
			}))
		);
	}
}
