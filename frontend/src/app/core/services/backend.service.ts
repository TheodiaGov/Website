import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {Endpoint, EndpointSettings} from '../classes/endpoint.class';
import {HttpOptions} from '../classes/http-options.class';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {BackendService};

////////////////////////////////////////////////////////////////////////////////
@Injectable()
/** Provides a friendly way to interact with the backend. */
class BackendService {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly http: HttpClient,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Create a new Endpoint that can makes various HTTP requests.
     * @param url The URL for the endpoint this Endpoint will hit.
     * @param version The version of the endpoint to use.
     * @param options HTTP request options.
     * @returns a new Endpoint.
     */
    public readonly newEndpoint = <SendType, ReceiveType, BodyType>(
        url: string,
        version: number,
        options?: HttpOptions,
        settings?: EndpointSettings,
    ) => new Endpoint<SendType, ReceiveType, BodyType>(
        this.http,
        `api/v${version}/${url}`,
        options,
        settings,
    );
}
