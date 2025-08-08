import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatBadgeModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;

  isHandset$!: Observable<boolean>;
  sidebarCollapsed = false;

  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    },
    {
      label: 'Profil',
      icon: 'person',
      route: '/profile'
    },
    {
      label: 'Dokumentumok',
      icon: 'folder',
      expanded: false,
      children: [
        {
          label: 'Önéletrajz szerkesztő',
          icon: 'description',
          route: '/documents/resume-editor'
        },
        {
          label: 'Motivációs levelek',
          icon: 'mail',
          route: '/documents/cover-letters'
        },
        {
          label: 'Csatolmányok',
          icon: 'attach_file',
          route: '/documents/attachments'
        }
      ]
    },
    {
      label: 'Jelentkezések',
      icon: 'work',
      expanded: false,
      children: [
        {
          label: 'Új jelentkezés',
          icon: 'add_circle',
          route: '/applications/new'
        },
        {
          label: 'Jelentkezési lista',
          icon: 'list',
          route: '/applications/list'
        },
        {
          label: 'Státusz követés',
          icon: 'timeline',
          route: '/applications/status'
        },
        {
          label: 'Interjúk',
          icon: 'event',
          route: '/applications/interviews'
        }
      ]
    },
    {
      label: 'Cégadatbázis',
      icon: 'business',
      route: '/companies'
    },
    {
      label: 'Bot & Automatizáció',
      icon: 'smart_toy',
      route: '/bot'
    },
    {
      label: 'Statisztikák',
      icon: 'analytics',
      route: '/statistics'
    },
    {
      label: 'Beállítások',
      icon: 'settings',
      route: '/settings'
    }
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit() {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );

    // Auto-expand menu if child is active
    this.menuItems.forEach(item => {
      if (item.children && this.hasActiveChild(item)) {
        item.expanded = true;
      }
    });
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  toggleExpansion(item: MenuItem) {
    if (item.children) {
      // Prevent event bubbling
      event?.preventDefault();
      event?.stopPropagation();

      // Close other expanded menus only if opening a new one
      if (!item.expanded) {
        this.menuItems.forEach(menuItem => {
          if (menuItem !== item && menuItem.children) {
            menuItem.expanded = false;
          }
        });
      }

      // Toggle current menu with smooth animation
      item.expanded = !item.expanded;
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);

    // Close sidebar on mobile after navigation
    this.isHandset$.subscribe(isHandset => {
      if (isHandset && this.drawer) {
        this.drawer.close();
      }
    }).unsubscribe();
  }

  isActive(route: string): boolean {
    return this.router.url === route || this.router.url.startsWith(route + '/');
  }

  hasActiveChild(item: MenuItem): boolean {
    if (!item.children) return false;
    return item.children.some(child =>
      child.route && this.isActive(child.route)
    );
  }

  toggleMenuButton() {
    this.isHandset$.subscribe(isHandset => {
      if (isHandset && this.drawer) {
        this.drawer.toggle();
      } else {
        this.toggleSidebar();
      }
    }).unsubscribe();
  }
}
