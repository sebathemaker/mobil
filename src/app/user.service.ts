import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: { username: string } | null = null;

  setCurrentUser(user: { username: string }) {
    this.currentUser = user;
  }

  getCurrentUser(): { username: string } | null {
    return this.currentUser;
  }
}
