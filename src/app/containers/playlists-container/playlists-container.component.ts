import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-playlists-container',
	templateUrl: './playlists-container.component.html',
	styleUrls: ['./playlists-container.component.css']
})
export class PlaylistsContainerComponent implements OnInit {
	constructor(private store: Store<any>) {}

	ngOnInit() {}
}
