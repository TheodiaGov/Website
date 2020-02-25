import {Injectable, isDevMode} from '@angular/core';
import {AsyncVar} from '../../meta/misc/async-var';

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Asynchronously stores and distributes variables.
 *  A great way to share data across the app.
 */
class AppVariableService {
    constructor() {return this;}
    readonly [key: string]: AsyncVar<any>;
}

////////////////////////////////////////////////////////////////////////////////
export {AppVariableService};