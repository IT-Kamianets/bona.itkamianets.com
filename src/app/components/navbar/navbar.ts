import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  lang = inject(LanguageService);
  t = this.lang.texts;
  private router = inject(Router);

  isScrolled = signal(false);

  navLinks = computed(() => [
    { href: '#about',    label: this.t().nav.about,    highlight: false },
    { href: '#gallery',  label: this.t().nav.gallery,  highlight: false },
    { href: '#contacts', label: this.t().nav.contacts, highlight: false },
    { href: '#menu',     label: this.t().nav.menu,     highlight: true  },
  ]);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollTo(href: string, event: Event) {
    event.preventDefault();
    const id = href.replace('#', '');
    if (this.router.url.split('#')[0] === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/'], { fragment: id });
    }
  }
}
