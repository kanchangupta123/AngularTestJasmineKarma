import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

//import { DashboardModule }    from './dashboard.module';
/* A component with inputs and outputs typically appears inside the view template 
(dashboard.component.html) of a host component. 
The host uses a property binding to set the input property and
 an event binding to listen to events raised by the output property.
The testing goal is to verify that such bindings work as expected. 
The tests should set input values and listen for output events.
 */

 //Declarations    
 let component: DashboardComponent;
 let fixture: ComponentFixture<DashboardComponent>;
 let heroService;
 let getHeroesSpy;     //crates mock Hero


/* Dashboard Component has a Hero Service */
describe('DashboardComponent', () => {

  beforeEach(async(() => {

    /* A Spy is a feature of Jasmine which lets you take an existing class, function, object
     and mock it in such a way that you can control what gets returned from functions.*/
    // Create a fake heroService object with a `getHeroes()` spy 
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    // Make the spy return a synchronous Observable with the test data
    getHeroesSpy = heroService.getHeroes.and.returnValue( of(HEROES) );
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        HeroSearchComponent
      ],
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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });
/* confirms the dashboard component exists with a Jasmine expectation */
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('Top Heroes');
  });

  it('should NOT have heroes before ngOnInit', () => {
    expect(component.heroes.length).toBe(0,'should not have heroes before ngOnInit');
  });

  it('should call heroService', async(() => {
/* The spy is designed such that any call to getHeroes receives an observable with HEROS. 
Unlike the real getHeroes() method, this spy bypasses the server and returns a 
synchronous observable whose value is available immediately.*/
  fixture.detectChanges();    
  expect(getHeroesSpy.calls.any()).toBe(true);
  }));

  it('should HAVE heroes', () => {
    fixture.detectChanges(); 
    expect(component.heroes.length).toBeGreaterThan(0,'should have heroes after service promise resolves');
  });

  it('should display 4 links', async(() => {
    fixture.detectChanges(); 
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));

});