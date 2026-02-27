import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  navLinks = [
    { href: '#about',    label: 'Про нас',  highlight: false },
    { href: '#gallery',  label: 'Галерея',  highlight: false },
    { href: '#contacts', label: 'Контакти', highlight: false },
    { href: '#menu',     label: 'Меню',     highlight: true  },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
