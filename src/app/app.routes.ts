import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { MenuPageComponent } from './pages/menu-page/menu-page';

export const routes: Routes = [
  { path: '',     component: HomeComponent },
  { path: 'menu', component: MenuPageComponent },
];
