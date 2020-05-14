import {Injectable} from '@angular/core';
import {BackendService, Endpoint} from 'app/framework/framework.module';
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
        //super();
        this.graphql = backend.newEndpoint('graphql', 0, {responseType: 'json'});
        return this;
    }
}
