import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
user: User;
  constructor() { }
  createNewUser(input: User) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword( input.email , input.password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(input) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(input.email, input.password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  }
}
