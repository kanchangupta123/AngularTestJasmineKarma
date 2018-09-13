"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var testing_3 = require("@angular/common/http/testing");
var rxjs_1 = require("rxjs");
var hero_search_component_1 = require("./hero-search.component");
var hero_service_1 = require("../hero.service");
var mock_heroes_1 = require("../mock-heroes");
describe('HeroSearchComponent', function () {
    var component;
    var fixture;
    var heroService;
    var getHeroesSpy;
    var el;
    beforeEach(testing_1.async(function () {
        heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
        getHeroesSpy = heroService.getHeroes.and.returnValue(rxjs_1.of(mock_heroes_1.HEROES));
        testing_1.TestBed.configureTestingModule({
            declarations: [hero_search_component_1.HeroSearchComponent],
            imports: [testing_2.RouterTestingModule.withRoutes([]), testing_3.HttpClientTestingModule],
            providers: [
                { provide: hero_service_1.HeroService, useValue: heroService }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(hero_search_component_1.HeroSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    //el = fixture.nativeElement.querySelector('div.search-component input.search-box');
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    xit('Search Box Value is blank after initialization', function () {
        expect(el.textContent.trim()).toBe('');
    });
});
//# sourceMappingURL=hero-search.component.spec.js.map