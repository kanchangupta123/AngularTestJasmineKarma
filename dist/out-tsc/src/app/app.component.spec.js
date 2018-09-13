"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/router/testing");
var testing_2 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var MessagesStubComponent = /** @class */ (function () {
    function MessagesStubComponent() {
    }
    MessagesStubComponent = __decorate([
        core_1.Component({ selector: 'app-messages', template: '' })
    ], MessagesStubComponent);
    return MessagesStubComponent;
}());
describe('App Component', function () {
    //Declarations   
    var component;
    var fixture;
    var h1;
    /* setup */
    beforeEach(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
            imports: [testing_1.RouterTestingModule],
            providers: [{ provide: testing_2.ComponentFixtureAutoDetect, useValue: true }]
        });
        /* creates an instance of the AppComponent,
        adds a corresponding element to the test-runner DOM,
        and returns a ComponentFixture */
        fixture = testing_2.TestBed.createComponent(app_component_1.AppComponent);
        /* The ComponentFixture is used to create a test instance
        for interacting with the created component and its corresponding element.*/
        component = fixture.componentInstance; // AppComponent test instance
        /* fixture.nativeElement gets the component's element */
        /* HTMLElement.querySelector to get the H1 tag element */
        h1 = fixture.nativeElement.querySelector('h1');
    });
    /* confirms the app component exists with a Jasmine expectation */
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
    /* The TestBed.createComponent does not trigger change detection automatically and
    h1.textContent will be '' */
    //it('no title in the DOM after createComponent()', () => {
    //    expect(h1.textContent).toEqual('');
    //  });
    /* tell the TestBed to perform data binding by calling fixture.detectChanges().
    Only then the <h1> have the expected title.*/
    it('should display original title after detectChanges()', function () {
        //fixture.detectChanges(); //Data Binding
        expect(h1.textContent).toContain(component.title);
    });
});
//# sourceMappingURL=app.component.spec.js.map