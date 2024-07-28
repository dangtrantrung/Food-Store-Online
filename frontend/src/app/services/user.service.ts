import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { IUserLogin } from 'app/shared/interfaces/IUserLogin'
import { USER_LOGIN_URL } from 'app/shared/models/constants/urls'
import { User } from 'app/shared/models/User'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable()
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User())
  public userObservable: Observable<User>
  constructor(private http: Http) {
    this.userObservable = this.userSubject.asObservable()
  }
  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post(USER_LOGIN_URL,userLogin).map((resp) => resp.json())
  }
}
