import {Route} from '@angular/router';

////////////////////////////////////////////////////////////////////////////////
const routes: Route[] = [{
    path: 'admin',
    pathMatch: 'full',
    loadChildren: async() => (await import('./content/admin/admin.module')).AdminModule,
}, {
    path: '**',
    loadChildren: async() => (await import('./content/default/default.module')).DefaultModule,
}];

////////////////////////////////////////////////////////////////////////////////
export {routes};
