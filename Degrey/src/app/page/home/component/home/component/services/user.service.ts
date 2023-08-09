import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { UserInfo } from 'src/app/model/user_info';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Product } from 'src/app/model/product';
import { Store } from '@ngrx/store';
import { setIdToken } from 'src/app/ngrx/actions/token.actions';
import { AuthState } from 'src/app/ngrx/states/auth.state';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo: BehaviorSubject<UserInfo | null>;

  constructor(
    private auth: Auth,
    private http: HttpClient,
    private store: Store<{ idToken: AuthState }>
  ) {
    this.userInfo = new BehaviorSubject<UserInfo | null>({
      id: 'id-001',
      name: 'Phung',
      email: 'test@gmail.com',
      avatarUrl:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    });
    onAuthStateChanged(
      this.auth,
      async (user) => {
        console.log(user);
        if (user) {
          this.userInfo.next({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            avatarUrl: user.photoURL,
          } as UserInfo);
          let idToken = await user!.getIdToken(true);
          // console.log(idToken);
          this.store.dispatch(setIdToken({ idToken }));

          this.sendMessages(idToken);
        } else {
          this.userInfo.next(null);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async logout() {
    await signOut(this.auth);
  }

  sendMessages(idToken: string) {
    console.log('hehe');
    this.http
      .get('http://localhost:3000/', {
        headers: new HttpHeaders({
          Authorization: `${idToken}`,
        }),
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}

// deleteProduct(product:Product){
//   this.http.delete("http://localhost:3000/product/delete/1").subscribe((data)=>{
//     console.log(data);
//   });
//   return this.http.get<Product[]>("http://localhost:3000/product/getAll");
// }
