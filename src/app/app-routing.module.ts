import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {CoronaStatusComponent} from "./corona-status/corona-status.component";
import {AktorenlogComponent} from "./aktorenlog/aktorenlog.component";


const routes: Routes = [
  {path: '/login', component: LoginComponent},
  {path: '/corona-status', component: CoronaStatusComponent},
  {path: '/aktorenlog', component: AktorenlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
