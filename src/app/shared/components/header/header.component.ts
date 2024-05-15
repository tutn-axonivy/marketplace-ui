import { Component } from '@angular/core';
import { Theme } from '../../enums/theme.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDarkMode: boolean = true;

  toggleThemeMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.setAttribute(
      'data-theme',
      this.isDarkMode ? Theme.DARK : Theme.LIGHT
    );
  }
}
