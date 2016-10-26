import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultsComponent } from './components/results/results.component';
import { QuestionsPageComponent } from './components/questions-page/questions-page.component';
import { HomeComponent} from './components/home/home.component';
import { LinksComponent} from './components/links/links.component';

import { AnalysisService} from './services/analysis.service';
import { ListService} from './services/list.service';


import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {Store} from "./app.store";
import {APP_ACTIONS} from "./actions/app.actions";
//import {APP_COMPONENTS} from "./components/app.components";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule,
      RouterModule.forRoot([
  //    { path: 'links', component: linksComponent },
      { path: 'results', component: ResultsComponent },
      { path: 'questions', component: QuestionsPageComponent },
    //  { path: 'links', component: ResultsComponent },
/*      
      { path: 'hero/:id', component: HeroDetailComponent },
{
        path: 'heroes',
        component: HeroListComponent,
        data: {
          title: 'Heroes List'
        }
      },*/
      { path: '', component: HomeComponent },
      { path: '**', component: HomeComponent }
    //  { path: '**', component: PageNotFoundComponent }
    ])],
  declarations: [
    AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    TodoListComponent, 
    TodoItemComponent,
    QuestionsPageComponent,
    ResultsComponent,
    HomeComponent,
    LinksComponent
  ],
  providers: [ 
    {
      provide : LocationStrategy,
      useClass: HashLocationStrategy
    }, Store, ...APP_ACTIONS,
    AnalysisService,
    ListService
],
  bootstrap: [AppComponent],
})

export class AppModule {}
