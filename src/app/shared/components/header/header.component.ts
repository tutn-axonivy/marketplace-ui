import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { Theme } from '../../enums/theme.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() isDarkMode: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = this.document.defaultView?.localStorage;

    if (localStorage) {
      this.loadDefaultTheme(localStorage);
    }
  }

  loadDefaultTheme(localStorage: Storage) {
    const theme = localStorage.getItem('data-theme') as Theme;
    if (theme) {
      this.setTheme(theme);
    } else {
      this.setTheme(Theme.LIGHT);
    }
  }

  toggleThemeMode() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? Theme.DARK : Theme.LIGHT;
    console.log(theme);
    this.setTheme(theme);
    localStorage.setItem('data-theme', theme);
  }

  setTheme(theme: Theme) {
    document.body.setAttribute('data-theme', theme);
    if (theme === Theme.DARK) {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }
}
