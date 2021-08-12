import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-test',
  template: `
       <h2>
          Welcome {{name}}
       </h2>
        <input [(ngModel)]="surname" type="text">
        {{surname}}
       `,
  styles: [`
            
         `]
})
export class TestComponent implements OnInit {
  
  public name = "Kamza";
  public surname = "";

  constructor() { }

  ngOnInit(): void {
  }



}
