import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

interface DashboardCard {
  title: string;
  description: string;
  icon: string;
  route: string;
  color: string;
  disabled?: boolean;
}

interface QuickStat {
  label: string;
  value: number;
  icon: string;
  color: string;
  progress?: number;
}

interface Activity {
  icon: string;
  description: string;
  timestamp: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressBarModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  quickStats: QuickStat[] = [
    {
      label: 'Aktív jelentkezések',
      value: 12,
      icon: 'send',
      color: 'primary',
      progress: 75
    },
    {
      label: 'Várakozásban',
      value: 8,
      icon: 'schedule',
      color: 'warning',
      progress: 50
    },
    {
      label: 'Sikeres jelentkezések',
      value: 3,
      icon: 'check_circle',
      color: 'success',
      progress: 25
    },
    {
      label: 'Bot futások',
      value: 47,
      icon: 'smart_toy',
      color: 'accent',
      progress: 90
    }
  ];

  functionCards: DashboardCard[] = [
    {
      title: 'Önéletrajz Szerkesztő',
      description: 'HTML alapú önéletrajz készítése és szerkesztése témákkal, személyre szabással',
      icon: 'description',
      route: '/documents/resume-editor',
      color: 'primary'
    },
    {
      title: 'Állásjelentkezések',
      description: 'Jelentkezések kezelése, új pozíciók hozzáadása és nyomon követése',
      icon: 'work',
      route: '/applications/list',
      color: 'accent'
    },
    {
      title: 'Státusz Kezelő',
      description: 'Jelentkezések állapotának frissítése és folyamat nyomon követése',
      icon: 'timeline',
      route: '/applications/status',
      color: 'warning'
    },
    {
      title: 'Adatbázis Kezelő',
      description: 'Cégek, pozíciók és kapcsolatok központi adatbázisa',
      icon: 'storage',
      route: '/companies',
      color: 'success',
      disabled: true
    },
    {
      title: 'Kimutatások',
      description: 'Részletes jelentések és statisztikák az álláskeresési folyamatról',
      icon: 'analytics',
      route: '/statistics',
      color: 'primary',
      disabled: true
    },
    {
      title: 'Jelentkező Bot',
      description: 'Automatikus állásjelentkezési bot beállítása és konfigurálása',
      icon: 'smart_toy',
      route: '/bot',
      color: 'accent',
      disabled: true
    }
  ];

  recentActivities: Activity[] = [
    {
      icon: 'send',
      description: 'Jelentkezés elküldve: Senior Angular Developer - TechCorp',
      timestamp: '2 órája'
    },
    {
      icon: 'edit',
      description: 'Önéletrajz frissítve: Angular szakértelem hozzáadva',
      timestamp: '5 órája'
    },
    {
      icon: 'schedule',
      description: 'Interjú bejegyezve: Frontend pozíció - StartupXY',
      timestamp: '1 napja'
    },
    {
      icon: 'check',
      description: 'Státusz frissítve: "Második forduló" - DevCompany',
      timestamp: '2 napja'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize any data or subscriptions here
    this.loadDashboardData();
  }

  navigateToFeature(route: string): void {
    this.router.navigate([route]);
  }

  getActivityIconClass(icon: string): string {
    const iconClasses: { [key: string]: string } = {
      'send': 'send',
      'edit': 'edit',
      'schedule': 'schedule',
      'check': 'check'
    };
    return iconClasses[icon] || 'info';
  }

  private loadDashboardData(): void {
    // Here you would typically load data from a service
    // For now, we're using static data defined above
    console.log('Dashboard data loaded');
  }
}
