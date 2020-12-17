import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {TransactionList} from '../model/TransactionList';
import {Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  public localTransactions: BehaviorSubject<TransactionList> = new BehaviorSubject(null);
  public currentData = this.localTransactions.asObservable();
  public dataAdded: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public dataAddedObservable = this.dataAdded.asObservable();
  constructor(private httpClient: HttpClient) { }

  getTransaction(): Observable<any> {
    return this.httpClient.get('assets/mock/transactions.json').pipe(map((res: any) => {
      return res.data;
    }));
  }

  addLocalTransaction(data): void {
    const localTransaction: TransactionList = {
      categoryCode : '#12a580',
      dates: {
        valueDate : (new Date()).getTime()
      },
      transaction: {
        amountCurrency: {
          amount: data.amount,
          currencyCode: 'EUR'
        },
        type: 'Salaries',
        creditDebitIndicator: 'CRDT'
      },
      merchant: {
        name: data.toAccount,
        accountNumber: 'GHT5637383930',
        logo: 'assets/icons/backbase.png'
      }
    };
    this.localTransactions.next(localTransaction);
    this.dataAdded.next(true);
  }
}
