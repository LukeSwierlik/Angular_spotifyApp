import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsContainerComponent } from './containers/album-details-container/album-details-container.component';
import { MusicSearchContainerComponent } from './containers/music-search-container/music-search-container.component';
import { PlaylistsContainerComponent } from './containers/playlists-container/playlists-container.component';
import { AlbumResolve } from './resolves/album.resolve';

const routes: Routes = [
	{
		path: 'music',
		component: MusicSearchContainerComponent
	},
	{
		path: 'album/:album_id',
		component: AlbumDetailsContainerComponent,
		resolve: {
			album: AlbumResolve
		}
	},
	{
		path: 'playlists',
		component: PlaylistsContainerComponent
	},
	{
		path: '',
		redirectTo: 'music',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
