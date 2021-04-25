import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input('serverElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ContentChild('contentParagaph',{static:true})paragraph:ElementRef;
  constructor() {
    console.log("constructor called.");
  }

  ngOnInit(): void {
    console.log("ngOnInit called.");
    console.log(this.paragraph.nativeElement.textContent);
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
    console.log(this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called.");

  }
}
