import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FooterComponent } from './components/footer/footer.component';

import { AnalysisService} from './services/analysis.service';
import { ListService} from './services/list.service';

import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {Store} from "./app.store";
import {APP_ACTIONS} from "./actions/app.actions";
//import {APP_COMPONENTS} from "./components/app.components";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
  declarations: [
    AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    TodoListComponent, 
    TodoItemComponent
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
