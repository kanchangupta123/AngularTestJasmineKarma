"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var dashboard_component_1 = require("./dashboard.component");
var hero_search_component_1 = require("../hero-search/hero-search.component");
var testing_2 = require("@angular/router/testing");
var rxjs_1 = require("rxjs");
var mock_heroes_1 = require("../mock-heroes");
var hero_service_1 = require("../hero.service");
//import { DashboardModule }    from './dashboard.module';
/* A component with inputs and outputs typically appears inside the view template
(dashboard.component.html) of a host component.
The host uses a property binding to set the input property and
 an event binding to listen to events raised by the output property.
The testing goal is to verify that such bindings work as expected.
The tests should set input values and listen for output events.
 */
//Declarations    
var component;
var fixture;
var heroService;
var getHeroesSpy; //crates mock Hero
/* Dashboard Component has a Hero Service */
describe('DashboardComponent', function () {
    beforeEach(testing_1.async(function () {
        /* A Spy is a feature of Jasmine which lets you take an existing class, function, object
         and mock it in such a way that you can control what gets returned from functions.*/
        // Create a fake heroService object with a `getHeroes()` spy 
        heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
        // Make the spy return a synchronous Observable with the test data
        getHeroesSpy = heroService.getHeroes.and.returnValue(rxjs_1.of(mock_heroes_1.HEROES));
        testing_1.TestBed.configureTestingModule({
            declarations: [
                dashboard_component_1.DashboardComponent,
                hero_search_component_1.HeroSearchComponent
            ],
            imports: [
                testing_2.RouterTestingModule.withRoutes([])
            ],
            providers: [
                { provide: hero_service_1.HeroService, useValue: heroService }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dashboard_component_1.DashboardComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });
    /* confirms the dashboard component exists with a Jasmine expectation */
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
    it('should display "Top Heroes" as headline', function () {
        expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('Top Heroes');
    });
    it('should NOT have heroes before ngOnInit', function () {
        expect(component.heroes.length).toBe(0, 'should not have heroes before ngOnInit');
    });
    it('should call heroService', testing_1.async(function () {
        /* The spy is designed such that any call to getHeroes receives an observable with HEROS.
        Unlike the real getHeroes() method, this spy bypasses the server and returns a
        synchronous observable whose value is available immediately.*/
        fixture.detectChanges();
        expect(getHeroesSpy.calls.any()).toBe(true);
    }));
    it('should HAVE heroes', function () {
        fixture.detectChanges();
        expect(component.heroes.length).toBeGreaterThan(0, 'should have heroes after service promise resolves');
    });
    it('should display 4 links', testing_1.async(function () {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
    }));
});
//# sourceMappingURL=dashboard.component.spec.js.map