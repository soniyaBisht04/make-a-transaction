import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppComponent} from './app.component';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MakeTransferComponent} from './make-transfer/make-transfer.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateFakeLoader, TranslateLoader, TranslateModule} from '@ngx-translate/core';

describe('AppComponent', () => {
  let fixture;
  let app;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MatDialogModule,
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: TranslateFakeLoader}
        })
      ],
      declarations: [
        AppComponent,
        MakeTransferComponent,
        TransactionListComponent
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'make-a-transaction'`, () => {
    expect(app.title).toEqual('make-a-transaction');
  });

  it(`should have included 'Make-Transaction'`, () => {
    expect(fixture.nativeElement.querySelector('app-make-transfer')).toBeDefined();
  });
  it(`should have included 'Transaction list'`, () => {
    expect(fixture.nativeElement.querySelector('app-transaction-list')).toBeDefined();
  });
});
