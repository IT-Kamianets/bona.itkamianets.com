import { Component, computed, effect, HostListener, inject } from '@angular/core';
import { DishModalService } from '../../services/dish-modal.service';
import { MenuService } from '../../services/menu';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-dish-modal',
  templateUrl: './dish-modal.html',
})
export class DishModal {
  service = inject(DishModalService);
  private menuService = inject(MenuService);
  private lang = inject(LanguageService);
  t = this.lang.texts;

  dish = computed(() => this.service.selectedDish());
  isOpen = computed(() => this.dish() !== null);

  constructor() {
    effect(() => {
      document.body.style.overflow = this.isOpen() ? 'hidden' : '';
    });
  }

  getImage(): string {
    const d = this.dish();
    return d ? (d.thumbnailUrl || d.imageUrl || '') : '';
  }

  formatPrice(): string {
    const d = this.dish();
    return d ? this.menuService.formatPrice(d.minPrice, d.maxPrice) : '';
  }

  stripHtml(html: string): string {
    return this.menuService.stripHtml(html);
  }

  @HostListener('document:keydown.escape')
  onEsc() { this.service.close(); }
}
