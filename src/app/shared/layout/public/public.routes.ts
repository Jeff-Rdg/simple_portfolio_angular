import {PublicComponent} from './public.component';
import {Route} from '@angular/router';
import {HomePage} from '../../../modules/home/home/home.page';

export const publicRoutes: Route = {
  path: '', component: PublicComponent, children: [
    {path: '', component: HomePage}
  ]
}


