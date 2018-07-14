import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/User';
import {Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  user: User;

  userSubject = new Subject<User>();

  constructor(private http: HttpClient) {
  }

  getData() {
    this.http.get('http://localhost:8080/user').subscribe((data: User) => {
      this.user = data;
      this.userSubject.next(this.user);
    });
  }

}
