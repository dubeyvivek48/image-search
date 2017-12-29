import { ImageService } from './Shared/image.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule} from '@angular/material';
import {MasonryModule} from 'angular2masonry';


import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MasonryModule

  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
