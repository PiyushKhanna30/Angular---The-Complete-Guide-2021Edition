import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean=false;
  serverCreationStatus:string="No server created.";
  serverName:string = "TestServer";
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = "Server created successfully!";
    this.allowNewServer=false;
  }
  onUpdateServerName(event:Event){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
