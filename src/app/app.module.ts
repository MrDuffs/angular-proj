import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconRenderComponent } from './components/icon-render/icon-render.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    IconRenderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
