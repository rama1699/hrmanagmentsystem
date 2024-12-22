import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { loginTemplate } from './login.component.html';
import { loginStyles } from './login.component.scss';
import { validateRequired, validatePassword } from '../../utils/validation';
import { storage, StorageKeys } from '../../utils/storage';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: loginTemplate,
  styles: loginStyles
})
export class LoginComponent {
  username = '';
  password = '';
  rememberMe = false;
  error = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    // Check for remembered user
    const rememberedUser = storage.get(StorageKeys.REMEMBER_ME);
    if (rememberedUser) {
      this.username = rememberedUser;
      this.rememberMe = true;
    }
  }

  onSubmit() {
    // Validate required fields
    const usernameError = validateRequired(this.username);
    if (usernameError) {
      this.error = usernameError;
      return;
    }

    // Validate password
    const passwordError = validatePassword(this.password);
    if (passwordError) {
      this.error = passwordError;
      return;
    }

    if (this.authService.login(this.username, this.password)) {
      if (this.rememberMe) {
        storage.set(StorageKeys.REMEMBER_ME, this.username);
      } else {
        storage.remove(StorageKeys.REMEMBER_ME);
      }
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid username or password';
    }
  }
}