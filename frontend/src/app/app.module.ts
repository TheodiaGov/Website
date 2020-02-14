import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AppMetaModule} from './meta/meta.module';
import {AppSharedModule} from './shared/shared.module';
import {AppMainModule} from './main/main.module';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {appRoutes} from './app.routes';
import {AppComponent} from './app.component';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),

        // Custom
        AppMetaModule.forRoot(),
        AppSharedModule,
        AppMainModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
class AppModule {}

////////////////////////////////////////////////////////////////////////////////
export {AppModule}
