import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { PlaylistsContainerComponent } from './playlists-container.component';

describe('PlaylistsContainerComponent', () => {
	let component: PlaylistsContainerComponent;
	let fixture: ComponentFixture<PlaylistsContainerComponent>;
	let store: Store<any>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			imports: [StoreModule.forRoot({})],
			declarations: [PlaylistsContainerComponent]
		});

		await TestBed.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PlaylistsContainerComponent);
		component = fixture.componentInstance;
		store = TestBed.get<Store>(Store);

		spyOn(store, 'dispatch').and.callThrough();
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
