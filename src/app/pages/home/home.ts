import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { MenuTeaser } from '../../components/menu-teaser/menu-teaser';
import { Gallery } from '../../components/gallery/gallery';
import { Contacts } from '../../components/contacts/contacts';

@Component({
  selector: 'app-home',
  imports: [Hero, About, MenuTeaser, Gallery, Contacts],
  templateUrl: './home.html',
})
export class HomeComponent {}
