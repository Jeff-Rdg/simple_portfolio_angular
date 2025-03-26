import { Component } from '@angular/core';
import {publicRoutes} from '../../layout/public/public.routes';
import {Route, RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgForOf,
    RouterLink
  ],
  standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems: {
    label: string, route: string
  }[] = []

  constructor() {
    this.getMenuItems(publicRoutes)
  }

  private getMenuItems(route: Route) {
    if (route.children) {
      route.children.forEach(child => {

        if (child?.data && child.data["title"]) {
          this.menuItems.push({label: child.data["title"], route: "/" + child.path})
        }
      })
    }
  }
}
