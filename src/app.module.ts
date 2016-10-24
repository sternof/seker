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
    AnalysisService,
    ListService
],
  bootstrap: [AppComponent],
})

export class AppModule {}
