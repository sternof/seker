import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

import { AppComponent } from './components/app.component';
import { ResultsComponent } from './components/results/results.component';
import { QuestionsPageComponent } from './components/questions-page/questions-page.component';
import { HomeComponent} from './components/home/home.component';
import { LinksComponent} from './components/links/links.component';
import { LinksPageComponent} from './components/links/linkspage.component';

import { AnalysisService} from './services/analysis.service';
import { ListService} from './services/list.service';



import {Store} from "./app.store";
import {APP_ACTIONS} from "./actions/app.actions";
import {APP_COMPONENTS} from "./components/app.components";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule,
      RouterModule.forRoot([
      { path: 'links', component: LinksPageComponent },
      { path: 'results', component: ResultsComponent },
      { path: 'questions', component: QuestionsPageComponent },
    //  { path: 'addquestions', component: AddQuestionsComponent },
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
    ])],
  declarations: [...APP_COMPONENTS
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
