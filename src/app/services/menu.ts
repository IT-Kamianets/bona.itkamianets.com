import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, shareReplay } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { MenuData, MenuTab, MenuCategory, Dish } from '../models/menu.model';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private http = inject(HttpClient);
  private lang = inject(LanguageService);

  private menuData$ = toObservable(this.lang.lang).pipe(
    switchMap(l =>
      this.http.get<MenuData>(l === 'uk' ? '/bona_menu_uk.json' : '/bona_menu_en.json')
    ),
    shareReplay(1),
  );

  getMenuData(): Observable<MenuData> {
    return this.menuData$;
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
    const isEn = this.lang.lang() === 'en';
    if (min === max || !max) return isEn ? `${min} UAH` : `${min} грн`;
    return isEn ? `from ${min} UAH` : `від ${min} грн`;
  }
}
