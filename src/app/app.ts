import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu'
import { Tourz } from './tourz/tourz';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Tourz],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-novo');
}