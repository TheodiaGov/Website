import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Utils} from '../utils/utils';
export {HttpOptions};

////////////////////////////////////////////////////////////////////////////////
/** HTTP request options.
 * @note This should be included in upstream Angular...
 */
class HttpOptions {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public headers?:         HttpHeaders;
    public params?:          HttpParams;
    public responseType?:    string|any; //BUG: Angular seems to have typed this incorrectly;  adding `any` type as a work-around.
    public observe?:         string|any; //BUG: Angular seems to have typed this incorrectly;  adding `any` type as a work-around.
    public reportProgress?:  boolean;
    public withCredentials?: boolean;

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(input?: HttpOptions|table) {

        // We want this class to match ad-hoc objects, so we need to make its custom member functions optional.
        if(this.initialize != null) {
            this.initialize();

            if(this.build != null
            && input != null
            ) {
                this.build(input);
            }
        }
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Initializes class variables */
    private readonly initialize? = (): void => {
        this.headers         = new HttpHeaders();
        this.params          = new HttpParams();
        this.responseType    = undefined; //TODO
        this.observe         = undefined; //TODO
        this.reportProgress  = undefined; //TODO
        this.withCredentials = undefined; //TODO
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    /** Populates the class with user input. */
    private readonly build? = (input: HttpOptions): void => {
        const merged = Utils.transferProperties<HttpOptions, HttpOptions>(this, input);
        for(const key of Reflect.ownKeys(merged) as Array<keyof HttpOptions>) {
            this[key] = merged[key];
        }
    }
};
