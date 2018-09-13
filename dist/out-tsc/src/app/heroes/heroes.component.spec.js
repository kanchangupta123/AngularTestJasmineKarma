"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var heroes_component_1 = require("./heroes.component");
var mock_heroes_1 = require("../mock-heroes");
var rxjs_1 = require("rxjs");
var hero_service_1 = require("../hero.service");
describe('HeroesComponent', function () {
    var component;
    var fixture;
    var heroService;
    var getHeroesSpy; //crates mock Hero
    var button;
    beforeEach(testing_1.async(function () {
        heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
        getHeroesSpy = heroService.getHeroes.and.returnValue(rxjs_1.of(mock_heroes_1.HEROES));
        testing_1.TestBed.configureTestingModule({
            declarations: [heroes_component_1.HeroesComponent],
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
        fixture = testing_1.TestBed.createComponent(heroes_component_1.HeroesComponent);
        component = fixture.componentInstance;
        //fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
    it('should display "My Heroes" as headline', function () {
        expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('My Heroes');
    });
    xit('should NOT have heroes before ngOnInit', function () {
        expect(component.heroes.length).toBeUndefined();
        //toBe('undefined', 'should not have heroes before ngOnInit');
    });
    it('should call heroService', testing_1.async(function () {
        fixture.detectChanges();
        expect(getHeroesSpy.calls.any()).toBe(true);
    }));
    it('should have heroes after calling ngOnInit', function () {
        fixture.detectChanges();
        expect(component.heroes.length).toBeGreaterThan(0, 'should not have heroes before ngOnInit');
    });
    it('should display heroes links', function () {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('li').length).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=heroes.component.spec.js.map