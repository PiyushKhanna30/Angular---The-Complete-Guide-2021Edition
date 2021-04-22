import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean=false;
  serverCreationStatus:string="No server created.";
  serverName:string = "";
  serverCreated:boolean=false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = "Server created successfully with server name "+ this.serverName;
    this.allowNewServer=false;
    this.serverCreated=true;
  }
  onUpdateServerName(event:Event){
    // console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
