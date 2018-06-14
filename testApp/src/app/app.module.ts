import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {PanelModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateFolderComponent } from './create-folder/create-folder.component';
import { ROUTING } from './app.routing';
import { BodyAppComponent } from './body-app/body-app.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateFolderComponent,
    BodyAppComponent
    
  ],
  imports: [
    BrowserModule,
    PanelModule,
    BrowserAnimationsModule,
    ROUTING,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
