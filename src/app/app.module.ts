import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {TranslateLoader, TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MakeTransferComponent} from './make-transfer/make-transfer.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {ContentService} from './services/content.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MakeTransferComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    SharedModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({loader: {provide: TranslateLoader, useClass: ContentService}})
  ],
  providers: [TranslateModule, TranslateService, TranslatePipe],
  exports: [SharedModule, TranslateModule, TranslatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  public currentGlobalLang = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.setLang();
  }

  setLang(): void {
    this.translate.use(this.currentGlobalLang);
  }
}
