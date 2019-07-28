import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { keysToCamel } from './helpers';

@Injectable()
export class MusicSearchServices {
    constructor(private httpClient: HttpClient) {}

    public getAlbums(query: string): Observable<any> {
        console.log('query', query);
        const url = 'https://api.spotify.com/v1/search?type=album&market=PL&query=Batman';
        return this.httpClient.get(url).pipe(map((value) => keysToCamel(value)), pluck('albums'));
    }
}
