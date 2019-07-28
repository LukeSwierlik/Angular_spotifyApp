import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicSearchContainerComponent } from './containers/music-search-container/music-search-container.component';

const routes: Routes = [
	{
		path: '',
		component: MusicSearchContainerComponent,
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
