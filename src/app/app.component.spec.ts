import {RouterTestingModule, } from '@angular/router/testing';
import { ComponentFixtureAutoDetect, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AppComponent } from "./app.component";


@Component({selector: 'app-messages', template: ''})
class MessagesStubComponent {}

describe('App Component', () => {

 //Declarations   
    let component: AppComponent;
    let fixture:   ComponentFixture<AppComponent>;
    let h1:        HTMLElement;

/* setup */
beforeEach(() => {
    TestBed.configureTestingModule({                            // configure TestBed
    declarations: [ AppComponent ],                             // component to test
    imports: [ RouterTestingModule ],                           // import test router module
    providers: [{ provide: ComponentFixtureAutoDetect, useValue: true } ]
  });
/* creates an instance of the AppComponent, 
adds a corresponding element to the test-runner DOM, 
and returns a ComponentFixture */
  fixture = TestBed.createComponent(AppComponent);   

/* The ComponentFixture is used to create a test instance  
for interacting with the created component and its corresponding element.*/  
  component = fixture.componentInstance;                       // AppComponent test instance
  
/* fixture.nativeElement gets the component's element */
/* HTMLElement.querySelector to get the H1 tag element */
  h1 = fixture.nativeElement.querySelector('h1');
});

/* confirms the app component exists with a Jasmine expectation */
it('should be created', () => {
    expect(component).toBeTruthy();     
  });

/* The TestBed.createComponent does not trigger change detection automatically and 
h1.textContent will be '' */
//it('no title in the DOM after createComponent()', () => {
//    expect(h1.textContent).toEqual('');
//  });

 /* tell the TestBed to perform data binding by calling fixture.detectChanges(). 
 Only then the <h1> have the expected title.*/ 
  it('should display original title after detectChanges()', () => {
    //fixture.detectChanges(); //Data Binding
    expect(h1.textContent).toContain(component.title);
  });
});