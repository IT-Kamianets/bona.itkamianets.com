import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { MenuSection } from './components/menu-section/menu-section';
import { Gallery } from './components/gallery/gallery';
import { Contacts } from './components/contacts/contacts';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, MenuSection, Gallery, Contacts],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
