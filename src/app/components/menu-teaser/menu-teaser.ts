import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MenuService } from '../../services/menu';
import { DishModalService } from '../../services/dish-modal.service';
import { LanguageService } from '../../services/language.service';
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
  private destroyRef = inject(DestroyRef);
  private langService = inject(LanguageService);
  dishModal = inject(DishModalService);
  t = this.langService.texts;

  menuData = signal<MenuData | null>(null);
  loading = signal(true);
  error = signal(false);

  ngOnInit() {
    this.menuService.getMenuData().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
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
