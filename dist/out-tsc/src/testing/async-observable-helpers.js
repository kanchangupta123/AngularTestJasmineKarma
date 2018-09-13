"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* Mock async observables that return asynchronously.
* The observable either emits once and completes or errors.
*
* Must call `tick()` when test with `fakeAsync()`.
*
* THE FOLLOWING DON'T WORK
* Using `of().delay()` triggers TestBed errors;
* see https://github.com/angular/angular/issues/10127 .
*
* Using `asap` scheduler - as in `of(value, asap)` - doesn't work either.
*/
var rxjs_1 = require("rxjs");
/** Create async observable that emits-once and completes
 *  after a JS engine turn */
function asyncData(data) {
    return rxjs_1.defer(function () { return Promise.resolve(data); });
}
exports.asyncData = asyncData;
/** Create async observable error that errors
 *  after a JS engine turn */
function asyncError(errorObject) {
    return rxjs_1.defer(function () { return Promise.reject(errorObject); });
}
exports.asyncError = asyncError;
//# sourceMappingURL=async-observable-helpers.js.map