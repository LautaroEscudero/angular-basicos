import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public title  : string = 'Counter App';
    public counter: number = 0;
    public base   : number = 5;

  accumulate = (value: number) => {
    this.counter += value;
  };

}