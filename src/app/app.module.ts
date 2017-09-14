import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListFooterComponent } from './list-footer/list-footer.component';
import { TodoDataService } from './shared/service/todo-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListHeaderComponent,
    ListComponent,
    ListItemComponent,
    ListFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
