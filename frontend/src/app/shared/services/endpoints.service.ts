import {Injectable} from '@angular/core';
import {BackendService, Endpoint} from 'app/core/core.module';
export {EndpointsService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Contains a HashMap of endpoints that can be hit. */
class EndpointsService {
    [key: string]: nil|Endpoint<unknown, unknown, unknown>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public readonly graphql: Endpoint<object,  object, object>;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(backend: BackendService) {
        this.graphql = backend.newEndpoint('graphql', 0, {responseType: 'json'}, {partial: true});
        return this;
    }
}
