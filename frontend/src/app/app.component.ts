import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './app.component.html',  // <- külön HTML fájl használata
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SmartApply';
}
