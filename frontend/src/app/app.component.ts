import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {ProfileComponent} from './pages/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, ProfileComponent],
  templateUrl: './app.component.html',  // <- külön HTML fájl használata
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SmartApply';
}
