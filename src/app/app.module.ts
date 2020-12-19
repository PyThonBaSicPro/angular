import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfComponent } from './if/if.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { ElseifComponent } from './elseif/elseif.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { ForComponent } from './for/for.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PushAndSpliceComponent } from './push-and-splice/push-and-splice.component';
import { FormsModule } from '@angular/forms';
import { SpliceComponent } from './splice/splice.component';
import { PushAndSpliceDynamicComponent } from './push-and-splice-dynamic/push-and-splice-dynamic.component';
import { PushAndSpliceDynamic2Component } from './push-and-splice-dynamic2/push-and-splice-dynamic2.component';

@NgModule({
  declarations: [
    AppComponent,
    IfComponent,
    IfelseComponent,
    ElseifComponent,
    SwitchcaseComponent,
    ForComponent,
    PushAndSpliceComponent,
    SpliceComponent,
    PushAndSpliceDynamicComponent,
    PushAndSpliceDynamic2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
