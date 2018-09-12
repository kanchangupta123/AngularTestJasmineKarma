import { async, ComponentFixture, TestBed, fakeAsync, tick, } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';
import {By} from "@angular/platform-browser";
describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;
  let heroService;
  let getHeroesSpy;
  let el: HTMLElement;
  beforeEach(async(() => {
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    
    getHeroesSpy = heroService.getHeroes.and.returnValue( of(HEROES) );

    TestBed.configureTestingModule({
      declarations: [ HeroSearchComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      providers: [
        { provide: HeroService, useValue: heroService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //el = fixture.nativeElement.querySelector('div.search-component input.search-box');
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('Search Box Value is blank after initialization', () => {
    expect(el.textContent.trim()).toBe(''); 
  });
});
