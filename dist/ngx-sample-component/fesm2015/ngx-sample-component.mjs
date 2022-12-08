import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class NgxSampleComponentService {
    constructor() { }
}
NgxSampleComponentService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: NgxSampleComponentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxSampleComponentService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: NgxSampleComponentService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: NgxSampleComponentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxSampleComponentComponent {
}
NgxSampleComponentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: NgxSampleComponentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxSampleComponentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: NgxSampleComponentComponent, selector: "lib-ngx-sample-component", ngImport: i0, template: `
    <p>
      ngx-sample-component works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: NgxSampleComponentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-sample-component', template: `
    <p>
      ngx-sample-component works!
    </p>
  ` }]
        }] });

class NgxSampleComponentModule {
}
NgxSampleComponentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: NgxSampleComponentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxSampleComponentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.3", ngImport: i0, type: NgxSampleComponentModule, declarations: [NgxSampleComponentComponent], exports: [NgxSampleComponentComponent] });
NgxSampleComponentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: NgxSampleComponentModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: NgxSampleComponentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxSampleComponentComponent
                    ],
                    imports: [],
                    exports: [
                        NgxSampleComponentComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-sample-component
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxSampleComponentComponent, NgxSampleComponentModule, NgxSampleComponentService };
//# sourceMappingURL=ngx-sample-component.mjs.map
