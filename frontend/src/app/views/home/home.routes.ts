import {Route, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
export {homeRoutes};

////////////////////////////////////////////////////////////////////////////////
const homeRoutes: Routes = Array<Route>({
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
});
