import { Injectable } from '@angular/core';
import { Auth,GoogleAuthProvider,signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth:Auth) { }
  async loginWithGoogle(){
    let provider = new GoogleAuthProvider();
    try{
      let credential = await signInWithPopup(this.auth,provider);
      return credential;
    } catch(error){
      console.log(error);
    }
    return null;
  }

  
}
