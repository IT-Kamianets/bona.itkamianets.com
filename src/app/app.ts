import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { DishModal } from './components/dish-modal/dish-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, DishModal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
