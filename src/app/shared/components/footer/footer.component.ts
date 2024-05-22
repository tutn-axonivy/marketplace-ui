import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  isDarkMode!: boolean;

  subscriptions: Subscription[] = [];

  themeService = inject(ThemeService);
}
