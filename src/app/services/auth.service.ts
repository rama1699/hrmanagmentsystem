import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { storage, StorageKeys } from '../utils/storage';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly MOCK_USERS: Partial<Employee>[] = [
    { 
      username: 'admin', 
      password: 'Admin@123', 
      role: 'admin',
      name: 'Admin User'
    },
    { 
      username: 'employee', 
      password: 'Employee@123', 
      role: 'employee',
      name: 'John Employee'
    }
  ];

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const user = this.MOCK_USERS.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      storage.set(StorageKeys.CURRENT_USER, {
        username,
        role: user.role,
        name: user.name
      });
      return true;
    }
    return false;
  }

  logout(): void {
    storage.remove(StorageKeys.CURRENT_USER);
    this.router.navigate(['/']);
  }

  getCurrentUser() {
    return storage.get(StorageKeys.CURRENT_USER);
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === 'admin';
  }
}