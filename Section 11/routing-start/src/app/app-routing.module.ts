import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGaurd } from "./servers/edit-server/can-deactivate-gaurd.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { AuthGaurd } from "./users/auth-gaurd.service";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users', canActivateChild: [AuthGaurd], component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent },
        ]
    },
    {
        path: 'servers', canActivate: [AuthGaurd], component: ServersComponent, children: [
            { path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGaurd] },
            { path: ':id', component: ServerComponent },
        ]
    },
    { path: 'not-found', component: ErrorPageComponent , data:{message:'Page Not Found!'}},
    { path: '**', component: PageNotFoundComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}