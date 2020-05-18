import {InjectionToken, Provider} from '@angular/core';

////////////////////////////////////////////////////////////////////////////////
/** Provide this constant to configure the `I18nPipe`. */
export const I18N_BUNDLE = new InjectionToken<I18nBundle>('I18N_BUNDLE');

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** Returns a provider for `I18N_BUNDLE`.
 * @param bundle The `I18nBundle` that `I18nPipe` should use.
 * @returns A provider for `I18N_BUNDLE` using the specified `I18nBundle`.
 */
export function setI18n(bundle: I18nBundle): Provider {
    return {provide: I18N_BUNDLE, useValue: bundle};
}