import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { IUserLogin } from 'app/shared/interfaces/IUserLogin'
import { USER_LOGIN_URL } from 'app/shared/models/constants/urls'
import { User } from 'app/shared/models/User'
import { ToastrService } from 'ngx-toastr'
import { BehaviorSubject, Observable } from 'rxjs'
import { tap } from 'rxjs/operators/tap'

const USER_KEY = 'User'
@Injectable()
export class UserService {
  private userSubject = new BehaviorSubject<User>(
    this.getUserFromLocalStorage(),
  )
  public userObservable: Observable<User>
  constructor(private http: Http, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable()
  }
  login(userLogin: IUserLogin): Observable<User> {
    return this.http
      .post(USER_LOGIN_URL, userLogin)
      .map((resp) => resp.json())
      .pipe(
        tap({
          next: (user) => {
            this.setUserToLocalStorage(user)
            this.userSubject.next(user)
            this.toastrService.success(
              `Welcome to Foodmine ${user.name}!`,
              'Login Successful',
            )
          },
          error: (errorResponse) => {
            this.toastrService.error(errorResponse.error, 'Login Failed!')
          },
        }),
      )
  }
  logout(){
    this.userSubject.next(new User())
    localStorage.removeItem(USER_KEY)
    window.location.reload()
  }
  //Save user to LocalStorage
  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  }
  private getUserFromLocalStorage() {
    const userJson = localStorage.getItem(USER_KEY)
    if (userJson) return JSON.parse(userJson) as User
    return new User()
  }
}
