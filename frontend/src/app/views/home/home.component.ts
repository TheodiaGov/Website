import {Component, OnInit} from '@angular/core';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
import {MetadataService} from 'app/core/core.module';
import {EndpointsService} from 'app/shared/shared.module';
export {HomeComponent};

////////////////////////////////////////////////////////////////////////////////
@Component({
    templateUrl: './home.component.html',
})
class HomeComponent implements OnInit {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    constructor(
        private readonly meta: MetadataService,
        private readonly endpoints: EndpointsService,
    ) {
        return this;
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public ngOnInit(): void {
        // this.endpoints.graphql.receive().subscribe();

        this.meta.set({
            //TODO: Pass these through the I18nPipe.
            title: 'Theodia, the Technocratic Republic',
            description: 'The official website of the Technocratic Republic of Theodia',
            keywords: ['Theodia', 'micronation', 'technocracy'],
        });
    }
}