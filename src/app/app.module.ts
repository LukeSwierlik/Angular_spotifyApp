import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './+state';
import { AlbumEffects } from './+state/album/effects/album.effects';
import { MusicSearchEffects } from './+state/music-search/effects/music-search.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AlbumDetailsContainerComponent } from './containers/album-details-container/album-details-container.component';
import { MusicSearchContainerComponent } from './containers/music-search-container/music-search-container.component';
import { PlaylistsContainerComponent } from './containers/playlists-container/playlists-container.component';
import { AuthInterceptor } from './interceptor/AuthInterceptor';
import { AlbumResolve } from './resolves/album.resolve';
import { AlbumService } from './services/album.service';
import { MusicSearchServices } from './services/music-search.services';

@NgModule({
	declarations: [
		AppComponent,
		MusicSearchContainerComponent,
		AlbumDetailsContainerComponent,
		NavBarComponent,
		CardComponent,
		PlaylistsContainerComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		StoreModule.forRoot(reducers, {
			metaReducers,
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true
			}
		}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot([MusicSearchEffects, AlbumEffects]),
		NgZorroAntdModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
		MusicSearchServices,
		AlbumService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		},
		AlbumResolve
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
