export interface ExternalUrls {
	spotify: string;
}

export interface Artist {
	external_urls: ExternalUrls;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
}

export interface Copyright {
	text: string;
	type: string;
}

export interface ExternalIds {
	upc: string;
}

export interface Image {
	height: number;
	url: string;
	width: number;
}

export interface Item {
	artists: Artist[];
	availableMarkets: string[];
	discNumber: number;
	durationMs: number;
	explicit: boolean;
	externalUrls: ExternalUrls;
	href: string;
	id: string;
	isLocal: boolean;
	name: string;
	previewUrl: string;
	trackNumber: number;
	type: string;
	uri: string;
}

export interface Tracks {
	href: string;
	items: Item[];
	limit: number;
	next?: any;
	offset: number;
	previous?: any;
	total: number;
}

export interface AlbumResponse {
	album_type: string;
	artists: Artist[];
	available_markets: string[];
	copyrights: Copyright[];
	externalIds: ExternalIds;
	externalUrls: ExternalUrls;
	genres: any[];
	href: string;
	id: string;
	images: Image[];
	label: string;
	name: string;
	popularity: number;
	releaseDate: string;
	releaseDataPrecision: string;
	totalTracks: number;
	tracks: Tracks;
	type: string;
	uri: string;
}

export interface AlbumPayload {
	artists: Artist[];
	images: Image[];
	tracks: Tracks;
	name: string;
	label: string;
}
