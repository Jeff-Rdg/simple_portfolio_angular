import { Component } from '@angular/core';
import {HeroComponent} from '../components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent],
  standalone: true,
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {

}
