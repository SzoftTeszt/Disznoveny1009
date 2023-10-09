import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Environments } from './environments';
import { NovenyekComponent } from './Part/novenyek/novenyek.component';
import { UjNovenyComponent } from './Part/uj-noveny/uj-noveny.component';
import { RendelesComponent } from './Part/rendeles/rendeles.component';
import { NavComponent } from './Part/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NovenyekComponent,
    UjNovenyComponent,
    RendelesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(Environments.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
