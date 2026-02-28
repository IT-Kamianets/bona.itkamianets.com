import { Injectable, signal } from '@angular/core';
import { Dish } from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class DishModalService {
  selectedDish = signal<Dish | null>(null);

  open(dish: Dish) { this.selectedDish.set(dish); }
  close()          { this.selectedDish.set(null); }
}
