import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UnsplashService1 {
    private readonly accessKey = 'YOUR_ACCESS_KEY'
    private readonly apiUrl = 'https://api.unsplash.com'

    constructor(private readonly http: HttpClient) { }

    searchPhotos(query: string, page: number, perPage: number = 10): Observable<any[]> {
        const params = new HttpParams()
            .set('query', query)
            .set('page', page.toString())
            .set('per_page', perPage.toString())
            .set('client_id', this.accessKey)

        return this.http.get<any[]>(`${this.apiUrl}/search/photos`, { params })
            .pipe(
                map(response => response.results),
                catchError((error: any) => Observable.throw(error))
            )
    }

    getRandomPhoto(): Observable<any> {
        const params = new HttpParams()
            .set('client_id', this.accessKey);

        return this.http.get<any>(`${this.apiUrl}/photos/random`, { params })
            .pipe(
                catchError((error: any) => Observable.throw(error))
            );
    }
}


export class UnsplashService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Client-ID YOUR_ACCESS_KEY'
        })
    };

    constructor(private http: HttpClient) { }

    searchPhotos(query: string, page: number): Observable<HttpResponse<any>> {
        const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}`;

        return this.http.get<any>(url, { ...this.httpOptions, observe: 'response' });
    }
}