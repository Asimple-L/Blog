import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ShowComponent } from './show/show.component';
import {RouterModule, Routes} from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { OutlineComponent } from './outline/outline.component';
import {FormsModule} from '@angular/forms';
import {ArticleService} from './shared/article.service';
import { LeaderComponent } from './leader/leader.component';

const routerConfig: Routes = [
  {path: '', component: IndexComponent},
  {path: '/show', component: IndexComponent, children:[
      {path: '/o', component: OutlineComponent},
      {path: '/a', component: ArticleComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchInputComponent,
    ShowComponent,
    ArticleComponent,
    OutlineComponent,
    LeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
