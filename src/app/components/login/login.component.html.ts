export const loginTemplate = `
<div class="login-container">
  <form (ngSubmit)="onSubmit()" #loginForm="ngForm" class="login-form">
    <h2>HR Management System</h2>
    
    <div class="form-group">
      <label for="username">Username</label>
      <input 
        type="text" 
        id="username" 
        [(ngModel)]="username" 
        name="username" 
        required>
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input 
        type="password" 
        id="password" 
        [(ngModel)]="password" 
        name="password" 
        required>
    </div>

    <div class="form-group">
      <label>
        <input type="checkbox" [(ngModel)]="rememberMe" name="rememberMe">
        Remember me
      </label>
    </div>

    <button type="submit">Login</button>

    <div *ngIf="error" class="error-message">
      {{ error }}
    </div>

    <div class="login-help">
      <p>Demo Credentials:</p>
      <ul>
        <li>Admin: admin / Admin&#64;123</li>
        <li>Employee: employee / Employee&#64;123</li>
      </ul>
    </div>
  </form>
</div>
`;