import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    console.log("Id : " + id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }
  onEdit() {
    const id:number = +this.route.snapshot.queryParams['allowEdit'];
    console.log(id);
    if(id==1){
      this.router.navigate(['/servers',id, 'edit']);
    }
  }

}
