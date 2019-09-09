import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tracks } from '../../+state/album/album.interfaces';
import { AlbumState } from '../../+state/album/reducer/album.reducer';
import { albumSelector } from '../../+state/album/selectors/album.selectors';

@Component({
	selector: 'app-album-details-container',
	templateUrl: './album-details-container.component.html'
})
export class AlbumDetailsContainerComponent implements OnInit {
	public tracks$ = this.store.pipe(select(albumSelector.getTracks));

	constructor(private store: Store<AlbumState>) {}

	ngOnInit(): void {}

	edit(item: any): void {}
}
