import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import localeNl from '@angular/common/locales/nl';
import { TelefoonnummerPipe } from './telefoonnummer.pipe';
registerLocaleData(localeNl);

@NgModule({
  declarations: [
    AppComponent,
    TelefoonnummerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "nl"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
