import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable, makeStateKey, PLATFORM_ID, TransferState } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

const POSTS_KEY = makeStateKey<any[]>('posts');

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient,
    private state: TransferState,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  /**
   * Pobranie postów
   * Jeśli nie wymuszamy pobrania postrów z API i jestesmy w przeglądarce i mamy state to bierzemy dane ze state.
   * Jeśli Wymuszamy pobranie danych lub nie ma danych w state to jesli jestesmy po stronie serwera to pobieramy dane z niego i zapisujemy je do state.
   */
  getPosts(forceRefresh = false): Observable<any[]> {
    if (!forceRefresh && isPlatformBrowser(this.platformId) && this.state.hasKey(POSTS_KEY)) {
      return of(this.state.get(POSTS_KEY, []));
    }

    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(posts => {
        if (isPlatformServer(this.platformId)) {
          this.state.set(POSTS_KEY, posts);
        }
      })
    );
  }
}
