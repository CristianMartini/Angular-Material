import { NgModule } from '@angular/core';
import {AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule } from '@angular/platform-browser';
import {MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MyDialogComponent } from './my-dialog/my-dialog.component';
import {MatDialogModule } from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
 import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
