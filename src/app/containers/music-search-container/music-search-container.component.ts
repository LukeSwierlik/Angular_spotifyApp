import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchSearchAlbums } from '../../+state/music-search/actions/music-search.actions';
import {
    Album,
    MusicSearchState
} from '../../+state/music-search/interfaces/music-search.interfaces';
import { musicSearchSelectors } from '../../+state/music-search/selectors/music-search.selectors';

@Component({
	selector: 'app-music-search-container',
	templateUrl: './music-search-container.component.html'
})
export class MusicSearchContainerComponent implements OnInit {
	public albums$: Observable<Album[]> = this.store.pipe(
		select(musicSearchSelectors.getAllAlbums)
	);

	constructor(private store: Store<MusicSearchState>) {}

    ngOnInit(): void {
        this.store.dispatch(fetchSearchAlbums({
            query: 'Batman'
        }));
    }
}
