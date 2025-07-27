import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

  // Placeholder használata a még nem kész oldalakhoz
  { path: 'profile', component: PlaceholderComponent },
  { path: 'documents/resume-editor', component: PlaceholderComponent },
  { path: 'documents/cover-letters', component: PlaceholderComponent },
  { path: 'documents/attachments', component: PlaceholderComponent },
  { path: 'applications/list', component: PlaceholderComponent },
  { path: 'applications/new', component: PlaceholderComponent },
  { path: 'applications/status', component: PlaceholderComponent },
  { path: 'applications/interviews', component: PlaceholderComponent },
  { path: 'companies', component: PlaceholderComponent },
  { path: 'bot', component: PlaceholderComponent },
  { path: 'statistics', component: PlaceholderComponent },
  { path: 'settings', component: PlaceholderComponent },

  // 404 fallback
  { path: '**', redirectTo: '/dashboard' }
];
