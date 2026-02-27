import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { MenuData, MenuTab, MenuCategory, Dish } from '../models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private http = inject(HttpClient);

  getMenuData(): Observable<MenuData> {
    return this.http.get<MenuData>('/bona_menu_uk.json');
  }

  getCategoriesForMenu(data: MenuData, menuId: number): MenuCategory[] {
    return data.categories.filter(c => c.menuId === menuId);
  }

  getDishesForCategory(data: MenuData, categoryId: number): Dish[] {
    return data.dishes.filter(d => d.categoryId === categoryId && d.active);
  }

  getDishesForMenu(data: MenuData, menuId: number): Dish[] {
    return data.dishes.filter(d => d.menuId === menuId && d.active);
  }

  stripHtml(html: string): string {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').trim();
  }

  formatPrice(min: number, max: number): string {
    if (!min && !max) return '';
    if (min === max || !max) return `${min} грн`;
    return `від ${min} грн`;
  }
}
