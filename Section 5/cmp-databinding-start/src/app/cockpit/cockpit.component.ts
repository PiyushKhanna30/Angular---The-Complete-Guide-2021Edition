import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output("bpCreated") bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverNameInput:HTMLInputElement) {
    console.log(serverNameInput.value);
    this.serverCreated.emit({
      serverName:serverNameInput.value,
      serverContent:this.newServerContent
    });
  }
  onAddBlueprint(serverNameInput:HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName:serverNameInput.value,
      serverContent:this.newServerContent
    });
  }
}
