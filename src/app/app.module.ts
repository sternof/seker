import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";



import { AppComponent } from './components/app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RouterLinksComponent } from './components/router-links/router-links.component';
import { InfoLinksComponent } from './components/info-links/info-links.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionsAddComponent } from './components/questions-add/questions-add.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionsPageComponent } from './components/questions-page/questions-page.component';
import { ResultsComponent } from './components/results/results.component';

//import {ProgressBarDirective } from './directives/progressbar.directive';

import { AnalysisService} from './services/analysis.service';
import { ListService} from './services/list.service';

import {Store} from "./app.store";
import {APP_ACTIONS} from "./actions/app.actions";
//import {APP_COMPONENTS} from "./components/app.components";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RouterLinksComponent,
    InfoLinksComponent,
    QuestionsListComponent,
    QuestionsAddComponent,
    QuestionComponent,
    QuestionsPageComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
   // NgbModule.forRoot(),
      RouterModule.forRoot([
      { path: 'links', component: InfoLinksComponent },
      { path: 'results', component: ResultsComponent },
      { path: 'questions', component: QuestionsPageComponent },
      { path: 'addquestions', component: QuestionsAddComponent },
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
  providers: [
    {
      provide : LocationStrategy,
      useClass: HashLocationStrategy
    }, Store, ...APP_ACTIONS,
    AnalysisService,
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
