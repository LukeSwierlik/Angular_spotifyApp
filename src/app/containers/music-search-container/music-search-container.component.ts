import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
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
	public searchForm: FormGroup;

	public albums$: Observable<Album[]> = this.store.pipe(
		select(musicSearchSelectors.getAllAlbums)
	);
	public loading$: Observable<boolean> = this.store.pipe(select(musicSearchSelectors.getLoading));

	constructor(private store: Store<MusicSearchState>) {
		this.searchForm = new FormGroup({
			query: new FormControl('Batman')
		});
	}

	ngOnInit(): void {
		this.store.dispatch(
			fetchSearchAlbums({
				query: 'Batman'
			})
		);

		this.searchForm
			.get('query')
			.valueChanges.pipe(
				filter(query => query.length >= 3),
				distinctUntilChanged(),
				debounceTime(400)
			)
			.subscribe(query => {
				this.store.dispatch(
					fetchSearchAlbums({
						query
					})
				);
			});
	}
}
