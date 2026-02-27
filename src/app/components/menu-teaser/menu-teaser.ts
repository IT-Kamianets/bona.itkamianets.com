import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../services/menu';
import { MenuData, Dish } from '../../models/menu.model';

const KITCHEN_MENU_ID = 34573;
const TEASER_COUNT = 8;

@Component({
  selector: 'app-menu-teaser',
  imports: [RouterLink],
  templateUrl: './menu-teaser.html',
})
export class MenuTeaser implements OnInit {
  private menuService = inject(MenuService);

  menuData = signal<MenuData | null>(null);
  loading = signal(true);
  error = signal(false);

  ngOnInit() {
    this.menuService.getMenuData().subscribe({
      next: (data) => {
        this.menuData.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  get featuredDishes(): Dish[] {
    const data = this.menuData();
    if (!data) return [];
    const menuId = data.menus.find(m => m.id === KITCHEN_MENU_ID)
      ? KITCHEN_MENU_ID
      : data.menus[0]?.id;
    return this.menuService.getDishesForMenu(data, menuId).slice(0, TEASER_COUNT);
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
