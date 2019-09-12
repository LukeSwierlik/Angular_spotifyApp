import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Item } from '../../+state/album/album.interfaces';
import { AlbumState } from '../../+state/album/reducer/album.reducer';
import { albumSelector } from '../../+state/album/selectors/album.selectors';

@Component({
	selector: 'app-album-details-container',
	templateUrl: './album-details-container.component.html'
})
export class AlbumDetailsContainerComponent {
	public tracks$ = this.store.pipe(select(albumSelector.getTracks));
	public images$ = this.store.pipe(select(albumSelector.getImages));

	constructor(private store: Store<AlbumState>) {}

	public addToPlaylist(item: any): void {}

	public play(audioRef: HTMLAudioElement, track: Item): void {
		if (audioRef.src !== track.previewUrl) {
			audioRef.src = track.previewUrl;
			audioRef.play();
		} else if (audioRef.paused) {
			audioRef.play();
		} else {
			audioRef.pause();
		}
	}
}
