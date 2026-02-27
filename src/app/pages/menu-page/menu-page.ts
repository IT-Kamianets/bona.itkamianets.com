import { Component, OnInit, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../services/menu';
import { MenuData, MenuTab, MenuCategory, Dish } from '../../models/menu.model';

@Component({
  selector: 'app-menu-page',
  imports: [NgClass, RouterLink],
  templateUrl: './menu-page.html',
})
export class MenuPageComponent implements OnInit {
  private menuService = inject(MenuService);

  menuData = signal<MenuData | null>(null);
  loading = signal(true);
  error = signal(false);
  activeMenuId = signal<number>(0);
  activeCategoryId = signal<number | null>(null);
  searchQuery = signal('');

  ngOnInit() {
    this.menuService.getMenuData().subscribe({
      next: (data) => {
        this.menuData.set(data);
        this.activeMenuId.set(data.menus[0]?.id ?? 0);
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
    let dishes = catId !== null
      ? this.menuService.getDishesForCategory(data, catId)
      : this.menuService.getDishesForMenu(data, this.activeMenuId());

    const q = this.searchQuery().trim().toLowerCase();
    if (!q) return dishes;
    return dishes.filter(d =>
      d.title.toLowerCase().includes(q) ||
      this.menuService.stripHtml(d.description).toLowerCase().includes(q)
    );
  }

  selectMenu(menuId: number) {
    this.activeMenuId.set(menuId);
    this.activeCategoryId.set(null);
    this.searchQuery.set('');
  }

  selectCategory(catId: number | null) {
    this.activeCategoryId.set(catId);
    this.searchQuery.set('');
  }

  onSearch(event: Event) {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  getImage(dish: Dish): string {
    return dish.thumbnailUrl || dish.imageUrl || this.menuData()?.emptyDishImage || '';
  }

  formatPrice(min: number, max: number): string {
    return this.menuService.formatPrice(min, max);
  }

  stripHtml(html: string): string {
    return this.menuService.stripHtml(html);
  }
}
