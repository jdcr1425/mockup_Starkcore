import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { BodyComponent } from './componentes/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidebarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
