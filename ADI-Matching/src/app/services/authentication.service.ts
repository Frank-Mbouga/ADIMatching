import { Inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, onAuthStateChanged, signOut, getRedirectResult, UserCredential } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, sendSignInLinkToEmail } from 'firebase/auth';
import { Router } from '@angular/router';
import { LocalstoreService } from './localstore.service';
import { IUser } from '../interfaces/user';
import { UserService } from './user.service';
import { Firestore, addDoc, collection, getDocs, query, where } from '@angular/fire/firestore';
Inject
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  dbref = collection(this.fire, 'Users');

  googleProvider = new GoogleAuthProvider();
  facebookProvider = new FacebookAuthProvider();
  private boosts = this.googleProvider.setCustomParameters({ prompt: 'select_account' });

  constructor(
    private auth: Auth, 
    private route: Router,
     private localStore: LocalstoreService,
     private fire : Firestore
    // @Inject(String) private userCredential:UserCredential,
     ) { }
  actionCodeSettings = {
    url: "https://simple-inventory-9c8e8.web.app/dashboard",
    handleCodeInApp: true,
  };
  signIn(user: IUser) {
    signInWithEmailAndPassword(this.auth, user.email, user.password)
      .then((result: any) => {
        sendSignInLinkToEmail(this.auth, user.email, this.actionCodeSettings)
          // if The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          .then(() => {
            this.localStore.set('emailForSignIn', user.email);
            console.log(user.email, "verified");
            this.localStore.set('User', {
              Name: user.Username,
              email: user?.email,
              // PhotoURL: user?.photoURL,
              loginStatus: true
            })

          }).catch((error) => {
            console.log(error.code, error.message);

          })

        onAuthStateChanged(this.auth, (user) => {
          this.localStore.set('User', {
            Name: user?.displayName,
            email: user?.email,
            PhotoURL: user?.photoURL,
            loginStatus: user?.emailVerified
          })
        })
        // this.route.navigate(['/dashboard']);
      }).catch((err: any) => {
        console.log(err.code);
        console.log(err.message);
      });
  }


  signOut() {
    signOut(this.auth).then(() => {
      onAuthStateChanged(this.auth, (user) => {
        this.localStore.set('User', {
          Name: user?.displayName,
          email: user?.email,
          PhotoURL: user?.photoURL,
          loginStatus: false
        })

      })
      this.route.navigate(["/sign-in"]);
      return
    }).catch((error) => {
      alert(error.code);
    })
  }
  signUp(user: IUser) {
    createUserWithEmailAndPassword(this.auth, user.email, user.password)
      .then((result) => {
        console.log('Registration successfull');
        this.route.navigate(['/sign-in']);
      }).catch((err) => {
        console.log(err.code);
      });

  }
  googleSignIn() {
    signInWithPopup(this.auth, this.googleProvider)
      .then(async (result) => {

        const querySnapshot = await getDocs(query(this.dbref, where('email', '==', result.user.email)))
        const poter = querySnapshot.docs.map(doc => {
          return doc.data()

        })

        if (poter.length === 0) {
          addDoc(this.dbref, {
            Name: result.user.displayName,
            email: result.user.email,
            PhotoURL: result.user.photoURL,
          })
          this.localStore.set('User', {
            Name: result.user.displayName,
            email: result.user.email,
            PhotoURL: result.user.photoURL,
            loginStatus: result.user.emailVerified
          })
          this.route.navigate(["/uoai/home"])
          return
        }

        if (poter[0]['email'] == result.user.email) {
          console.log(`Account already Exist. REDIRECTING YOU TO DASHBOARD`);
          this.localStore.set('User', {
            Name: result.user.displayName,
            email: result.user.email,
            PhotoURL: result.user.photoURL,
            loginStatus: result.user.emailVerified
          })
          this.route.navigate(["/uoai/home"]);
          return
        }

      })
      .catch((err) => {
        console.log(err);
      });
  }


  facebookSignIn() {
    signInWithPopup(this.auth, this.facebookProvider)
      .then((result) => {
        console.log(result.user);
        onAuthStateChanged(this.auth, (user) => {
          this.localStore.set('User', {
            Name: user?.displayName,
            email: user?.email,
            PhotoURL: user?.photoURL,
            loginStatus: user?.emailVerified
          })
        })
        this.route.navigate(['']);

      }).catch((err) => {
        console.log(err.code);
      });
  }
  
}