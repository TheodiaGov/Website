////////////////////////////////////////////////////////////////////////////////
import {enableProdMode} from '@angular/core';
import {environment} from './config/env/env.const';
if(environment.prodMode) {
    enableProdMode();
}

////////////////////////////////////////////////////////////////////////////////
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RootModule} from './app/views/root/root.module';
export default platformBrowserDynamic()
    .bootstrapModule(RootModule)
    .catch(console.error);
