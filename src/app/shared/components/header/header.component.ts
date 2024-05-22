import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { Theme } from '../../enums/theme.enum';
import { NavItem } from '../../models/nav-item.model';

const DATA_THEME = 'data-bs-theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() isDarkMode: boolean = false;

  selectedNav: string = '/';

  navItems: NavItem[] = [
    {
      label: 'News',
      link: 'https://developer.axonivy.com/news',
    },
    {
      label: 'Doc',
      link: 'https://developer.axonivy.com/doc',
    },
    {
      label: 'Tutorial',
      link: 'https://developer.axonivy.com/tutorial',
    },
    {
      label: 'Community',
      link: 'https://community.axonivy.com/',
    },
    {
      label: 'Team',
      link: 'https://developer.axonivy.com/team',
    },
    {
      label: 'Market',
      link: '/',
    },
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = this.document.defaultView?.localStorage;

    if (localStorage) {
      this.loadDefaultTheme(localStorage);
    }
  }

  loadDefaultTheme(localStorage: Storage) {
    const theme = localStorage.getItem(DATA_THEME) as Theme;
    if (theme) {
      this.setTheme(theme);
    } else {
      this.setTheme(Theme.LIGHT);
    }
  }

  toggleThemeMode() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? Theme.DARK : Theme.LIGHT;
    this.setTheme(theme);
    localStorage.setItem(DATA_THEME, theme);
  }

  setTheme(theme: Theme) {
    document.querySelector('html')!.setAttribute(DATA_THEME, theme);
    if (theme === Theme.DARK) {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }

  onNavClick(navLink: string) {
    this.selectedNav = navLink;
  }
}
