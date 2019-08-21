import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../models/book';
import {Observable} from 'rxjs';
import {ResponsePageList} from '../models/responsePageList';
import {AuthenticationService} from './autentication.service';


@Injectable()
export class BookService {

  private headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.getToken()});

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getAllBooks() {
    return this.http.get('http://localhost:8080/books', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      }
    }) as Observable<Book[]>;
  }

  getBooksFromApi(query: string) {
    return this.http.get('http://localhost:8080/searchBook', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      },
      params: {
        query: query
      }
    }) as Observable<Book[]>;
  }

  getPaginatedBooks(orderBy: string, direction: string, page: string, size: string, query: string) {

    return this.http.get('http://localhost:8080/paginatedBooks', {

      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.getToken()},
      params: {
        orderBy: orderBy,
        direction: direction,
        page: page,
        size: size,
        query: query
      }
    }) as Observable<ResponsePageList>;
  }

  addBook(book: Book) {

    return this.http.post('http://localhost:8080/add', book, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      },
      params: undefined,
      reportProgress: false,
      responseType: 'json',
      withCredentials: false
    }) as Observable<any>;
  }
}