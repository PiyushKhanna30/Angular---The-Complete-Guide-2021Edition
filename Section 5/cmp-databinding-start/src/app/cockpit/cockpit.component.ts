import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output("bpCreated") bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  @ViewChild('serverContentInput', {static: true}) serverContentInput:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverNameInput:HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName:serverNameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    });
  }
  onAddBlueprint(serverNameInput:HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName:serverNameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    });
  }
}
