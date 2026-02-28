import { Injectable, computed, signal } from '@angular/core';
import { uk } from '../i18n/uk';
import { en } from '../i18n/en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<'uk' | 'en'>(
    (localStorage.getItem('bona-lang') as 'uk' | 'en') ?? 'uk'
  );

  texts = computed(() => (this.lang() === 'uk' ? uk : en));

  toggle() {
    const next = this.lang() === 'uk' ? 'en' : 'uk';
    this.lang.set(next);
    localStorage.setItem('bona-lang', next);
  }
}
