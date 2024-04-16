import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { LucideAngularModule, File, Home, Menu, UserCheck } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    LucideAngularModule.pick({File, Home, Menu, UserCheck})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
