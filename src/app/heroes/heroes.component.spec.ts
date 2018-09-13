import { async, ComponentFixture, TestBed,fakeAsync, tick,  } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesComponent } from './heroes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { HEROES } from '../mock-heroes';
import {Hero} from '../hero';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import {DebugElement} from "@angular/core";
describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroService;
  let getHeroesSpy;     //crates mock Hero
  let heroEl:        HTMLButtonElement;
  let el: DebugElement;
  beforeEach(async(() => {
    heroService = jasmine.createSpyObj('HeroService',['getHeroes']);
    getHeroesSpy= heroService.getHeroes.and.returnValue(of(HEROES));
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: HeroService, useValue: heroService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "My Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('My Heroes');
  });
  
  xit('should NOT have heroes before ngOnInit', () => {
    expect(component.heroes.length).toBeUndefined();
    //toBe('undefined', 'should not have heroes before ngOnInit');
  });

  it('should call heroService', async(() => {
      fixture.detectChanges();    
      expect(getHeroesSpy.calls.any()).toBe(true);
      }));

  it('should have heroes after calling ngOnInit', () => {
    fixture.detectChanges();   
    expect(component.heroes.length).toBeGreaterThan(0, 'should not have heroes before ngOnInit');
      });

  it('should display heroes links', () => {
        fixture.detectChanges();   
        expect(fixture.nativeElement.querySelector('a').length).toBeGreaterThan(0);
      });

      
  it('should raise selected event when clicked (click helper)', fakeAsync( () => {
        let selectedHero: Hero;
        let expectedHero: Hero[] =[{ id: 11, name: 'Mr. Nice' }];
        heroEl   = fixture.nativeElement.querySelector('.add');
        let button = fixture.debugElement.nativeElement.querySelector('.add');
        

        button.triggerEventHandler('click', null);
        tick(); // simulates the passage of time until all pending asynchronous activities finish
        fixture.detectChanges();
        expect(component.add).toHaveBeenCalled();
       
       // click(heroEl); // click helper with native element
      
        //expect(selectedHero).toBe(expectedHero);
      }));

      el = fixture.debugElement.query(By.css('add'));
     
  it('Button label ', () => { 
        expect(el.nativeElement.textContent.trim()).toBe('');
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('add');
        fixture.detectChanges();
        expect(component.add).toHaveBeenCalled();
      });
});
