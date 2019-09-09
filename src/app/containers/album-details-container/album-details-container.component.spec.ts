import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumDetailsContainerComponent } from './album-details-container.component';

describe('AlbumDetailsContainerComponent', () => {
	let component: AlbumDetailsContainerComponent;
	let fixture: ComponentFixture<AlbumDetailsContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AlbumDetailsContainerComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AlbumDetailsContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
