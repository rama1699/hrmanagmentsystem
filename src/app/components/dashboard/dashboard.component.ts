import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <header class="header">
        <h1>HR Management System</h1>
        <div class="user-info">
          <span>Welcome, {{ userName }}</span>
          <button (click)="logout()">Logout</button>
        </div>
      </header>

      <div class="content">
        <div class="attendance-section">
          <h2>Attendance</h2>
          <div class="attendance-actions">
            <button (click)="checkIn()" [disabled]="checkedIn">Check In</button>
            <button (click)="checkOut()" [disabled]="!checkedIn">Check Out</button>
          </div>
          <div *ngIf="checkedIn" class="time-info">
            <p>Check-in time: {{ checkInTime | date:'medium' }}</p>
          </div>
        </div>

        <div *ngIf="isAdmin" class="admin-section">
          <h2>Administrative Tools</h2>
          <button (click)="manageEmployees()">Manage Employees</button>
          <button (click)="viewReports()">View Reports</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      min-height: 100vh;
      background-color: #f5f5f5;
    }

    .header {
      background-color: #007bff;
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .content {
      padding: 2rem;
    }

    .attendance-section, .admin-section {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    button {
      padding: 0.5rem 1rem;
      margin-right: 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }

    .time-info {
      margin-top: 1rem;
      color: #666;
    }
  `]
})
export class DashboardComponent {
  userName = 'John Doe';
  isAdmin = true;
  checkedIn = false;
  checkInTime: Date | null = null;

  checkIn() {
    this.checkedIn = true;
    this.checkInTime = new Date();
  }

  checkOut() {
    this.checkedIn = false;
    // TODO: Calculate and store working hours
  }

  logout() {
    // TODO: Implement logout functionality
  }

  manageEmployees() {
    // TODO: Navigate to employee management
  }

  viewReports() {
    // TODO: Navigate to reports view
  }
}