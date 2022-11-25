import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { SidenavComponent } from './partials/sidenav/sidenav.component';
import { ContentComponent } from './partials/content/content.component';
import { InterporlacionComponent } from './clase4/interporlacion/interporlacion.component';
import { MiDirectivaDirective } from './clase4/mi-directiva.directive';
import { FormsModule } from '@angular/forms';
import { MiPipePipe } from './clase4/mi-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    InterporlacionComponent,
    MiDirectivaDirective,
    MiPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
