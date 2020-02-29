import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AsyncVar} from './misc/async-var';
import {Keyring} from './misc/keyring';
import {Utilities} from './misc/utilities';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {AnalyticsService} from './services/analytics.service';
import {BackendService, EndpointType, httpOptions} from './services/backend.service';
import {ConsoleService} from './services/console.service';
import {LocaleService} from './services/locale.service';
import {EnvironmentService} from './services/environment.service';

////////////////////////////////////////////////////////////////////////////////
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Code that is essential to the basic functioning of the application.
 *  Amounts to a custom framework on-top of Angular.
 */
class FrameworkModule {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Provides singleton services that should only be initialized once. */
    public static forRoot(): ModuleWithProviders<FrameworkModule> {
        return {
            ngModule: FrameworkModule,
            providers: [
                AnalyticsService,
                BackendService,
                ConsoleService,
                EnvironmentService,
                LocaleService,
            ],
        };
    }
}

////////////////////////////////////////////////////////////////////////////////
export {
    FrameworkModule,

    // Misc
    AsyncVar,
    Keyring,
    Utilities,

    // Services
    AnalyticsService,
    BackendService,
    ConsoleService,
    EnvironmentService,
    LocaleService,

    // Types
    EndpointType,
    httpOptions,
};
