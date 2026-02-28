import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MenuService } from '../../services/menu';
import { LanguageService } from '../../services/language.service';
import { MenuData, MenuTab, MenuCategory, Dish } from '../../models/menu.model';

@Component({
  selector: 'app-menu-section',
  imports: [NgClass],
  templateUrl: './menu-section.html',
  styleUrl: './menu-section.scss',
})
export class MenuSection implements OnInit {
  private menuService = inject(MenuService);
  private destroyRef = inject(DestroyRef);
  private langService = inject(LanguageService);
  t = this.langService.texts;

  menuData = signal<MenuData | null>(null);
  loading = signal(true);
  error = signal(false);
  activeMenuId = signal<number>(0);
  activeCategoryId = signal<number | null>(null);

  ngOnInit() {
    this.menuService.getMenuData().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (data) => {
        this.menuData.set(data);
        this.activeMenuId.set(data.menus[0]?.id ?? 0);
        this.activeCategoryId.set(null);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  get menus(): MenuTab[] {
    return this.menuData()?.menus ?? [];
  }

  get activeCategories(): MenuCategory[] {
    const data = this.menuData();
    if (!data) return [];
    return this.menuService.getCategoriesForMenu(data, this.activeMenuId());
  }

  get filteredDishes(): Dish[] {
    const data = this.menuData();
    if (!data) return [];
    const catId = this.activeCategoryId();
    if (catId !== null) {
      return this.menuService.getDishesForCategory(data, catId);
    }
    return this.menuService.getDishesForMenu(data, this.activeMenuId());
  }

  selectMenu(menuId: number) {
    this.activeMenuId.set(menuId);
    this.activeCategoryId.set(null);
  }

  selectCategory(catId: number | null) {
    this.activeCategoryId.set(catId);
  }

  stripHtml(html: string): string {
    return this.menuService.stripHtml(html);
  }

  formatPrice(min: number, max: number): string {
    return this.menuService.formatPrice(min, max);
  }

  getImage(dish: Dish): string {
    return dish.thumbnailUrl || dish.imageUrl || this.menuData()?.emptyDishImage || '';
  }
}
