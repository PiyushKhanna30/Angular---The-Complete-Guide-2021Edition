import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input('serverElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  constructor() {
    console.log("constructor called.");
  }

  ngOnInit(): void {
    console.log("ngOnInit called.");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called.");
    console.log(changes);
  }
  ngDoCheck() {
    console.log("ngDoCheck called.");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit called.");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called.");

  }
}
