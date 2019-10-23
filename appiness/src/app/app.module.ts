import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhubchildComponent } from './ghubcomp/ghubchild/ghubchild.component';
import { GhublistComponent } from './ghubcomp/ghublist/ghublist.component';

@NgModule({
  declarations: [
    AppComponent,
    GhubchildComponent,
    GhublistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
