import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from 'components/app.component';
import {provideRouter, RouterConfig} from '@angular/router';
import {HomeComponent} from "./components/home.component";
import {AdminComponent} from "./components/admin.component";


const routes: RouterConfig = [
  {path: 'home', component: HomeComponent},
  {path: 'admin/:id', component: AdminComponent},
];

bootstrap(AppComponent, [
    provideRouter(routes)
]);
