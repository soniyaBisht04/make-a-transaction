import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListComponent } from './transaction-list.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TransactionService } from "../services/transaction.service";
import { TranslateModule } from '@ngx-translate/core';

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [TransactionService],
      declarations: [ TransactionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have included 'Transaction-item'`, () => {
    expect(fixture.nativeElement.querySelector('app-transaction-item')).toBeDefined();
  });
});
