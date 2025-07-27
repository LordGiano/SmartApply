import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

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
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  quickStats: QuickStat[] = [
    { label: 'Aktív jelentkezések', value: 12, icon: 'send', color: 'primary' },
    { label: 'Várakozásban', value: 8, icon: 'schedule', color: 'warn' },
    { label: 'Sikeres jelentkezések', value: 3, icon: 'check_circle', color: 'success' },
    { label: 'Bot futások', value: 47, icon: 'smart_toy', color: 'accent' }
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
      color: 'warn'
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

  recentActivities = [
    { icon: 'send', description: 'Jelentkezés elküldve: Senior Angular Developer - TechCorp', timestamp: '2 órája' },
    { icon: 'edit', description: 'Önéletrajz frissítve: Angular szakértelem hozzáadva', timestamp: '5 órája' },
    { icon: 'schedule', description: 'Interjú bejegyezve: Frontend pozíció - StartupXY', timestamp: '1 napja' },
    { icon: 'check', description: 'Státusz frissítve: "Második forduló" - DevCompany', timestamp: '2 napja' }
  ];
}
