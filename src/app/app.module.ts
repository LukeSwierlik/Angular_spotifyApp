import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { environment } from '../environments/environment';
import { MusicSearchEffects } from './+state/music-search/effects/music-search.effects';
import { metaReducers, reducers } from './+state/music-search/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MusicSearchContainerComponent } from './containers/music-search-container/music-search-container.component';
import { AuthInterceptor } from './interceptor/AuthInterceptor';
import { MusicSearchServices } from './services/music-search.services';

@NgModule({
    declarations: [
        AppComponent,
        MusicSearchContainerComponent,
        NavBarComponent,
        CardComponent
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
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([ MusicSearchEffects ]),
        NgZorroAntdModule,
    ],
    providers: [
        MusicSearchServices,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
