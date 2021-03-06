import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatSliderModule, MatCardModule, MatInputModule } from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckNumberDirective} from './directives/checkNumber.directive';
import {ColorPickerModule} from 'ngx-color-picker';
import {RgbComponent} from './components/rgb/rgb.component';
import { XyzComponent } from './components/xyz/xyz.component';
import { LabComponent } from './components/lab/lab.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckNumberDirective,
    RgbComponent,
    XyzComponent,
    LabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
