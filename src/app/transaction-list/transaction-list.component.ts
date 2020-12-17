import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../services/transaction.service';
import {Subscription} from 'rxjs';
import {TransactionList} from '../model/TransactionList';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();
  public transactionList: TransactionList[] = [];

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.subscriptions.add(this.transactionService.getTransaction().subscribe((data) => {
      this.transactionList = data;
    }));
    this.transactionService.currentData.subscribe((data) => {
      if (data) {
        this.transactionList.push(data);
      }
    });
  }

}
