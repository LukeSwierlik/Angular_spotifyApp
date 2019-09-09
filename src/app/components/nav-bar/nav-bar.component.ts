import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-nav-bar, [appNavBar]',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
	public readonly navList = [
		{
			title: 'Music Search',
			link: 'music'
		},
		{
			title: 'Playlists',
			link: 'playlists'
		}
	];
}
