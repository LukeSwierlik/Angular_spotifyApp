import { createEntityAdapter, EntityState } from '@ngrx/entity';

interface Image {
	height: number;
	url: string;
	width: string;
}

interface Artist {
	externalUrls: {
		spotify: string;
	};
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
}

export interface Album {
	album_type: string;
	artists: Artist[];
	externalUrls: {
		spotify: string;
	};
	href: string;
	id: string;
	images: Image[];
	name: string;
	releaseData: string;
	releaseDataPrecision: string;
	totalTracks: number;
	type: string;
	uri: string;
}

export interface Albums {
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
	items: Album[];
}

export interface AlbumsState extends EntityState<Album> {
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
}

export interface MusicSearchState {
	albums: AlbumsState;
	error: boolean;
	loading: boolean;
}

export const albumsEntityAdapter = createEntityAdapter<Album>();
