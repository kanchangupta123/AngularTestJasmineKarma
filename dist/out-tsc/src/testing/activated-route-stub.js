"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export for convenience.
var router_1 = require("@angular/router");
exports.ActivatedRoute = router_1.ActivatedRoute;
var router_2 = require("@angular/router");
var rxjs_1 = require("rxjs");
/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
var ActivatedRouteStub = /** @class */ (function () {
    function ActivatedRouteStub(initialParams) {
        // Use a ReplaySubject to share previous values with subscribers
        // and pump new values into the `paramMap` observable
        this.subject = new rxjs_1.ReplaySubject();
        /** The mock paramMap observable */
        this.paramMap = this.subject.asObservable();
        this.setParamMap(initialParams);
    }
    /** Set the paramMap observables's next value */
    ActivatedRouteStub.prototype.setParamMap = function (params) {
        this.subject.next(router_2.convertToParamMap(params));
    };
    ;
    return ActivatedRouteStub;
}());
exports.ActivatedRouteStub = ActivatedRouteStub;
//# sourceMappingURL=activated-route-stub.js.map