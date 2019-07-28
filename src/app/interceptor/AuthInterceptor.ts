import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    private authorize(): void {
        localStorage.removeItem('token');

        const clientId = '2787d1f8e189478a8f9411de5eacd25c';
        const redirectUri = 'http://localhost:4300/';
        const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}`;

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

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpEventType.Response>> {
        const token = this.getToken();

        if (!token) {
            return next.handle(req);
        }

        const authReq = req.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
        });

        return next.handle(authReq);
    }
}
