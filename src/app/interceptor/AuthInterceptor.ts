import {
	HttpEvent,
	HttpEventType,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { spotifyApi } from '../config/config';

@Injectable({
	providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
	public intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<HttpEventType.Response>> {
		const token = this.getToken();

		if (!token) {
			return next.handle(req);
		}

		const authReq = req.clone({
			setHeaders: { Authorization: `Bearer ${token}` }
		});

		return next.handle(authReq);
	}

	private authorize(): void {
		const { clientId, redirectUri } = spotifyApi;
		const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}`;

		localStorage.removeItem('token');
		window.location.replace(url);
	}

	private getToken(): string {
		let token = localStorage.getItem('token');

		if (!token) {
			const match = window.location.hash.match(/#access_token=(.*?)&/);

			token = match && match[1];

			localStorage.setItem('token', token);
		}

		if (!token) {
			this.authorize();
		}

		return token;
	}
}
