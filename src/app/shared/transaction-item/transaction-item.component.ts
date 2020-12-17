import {Component, Input, OnInit} from '@angular/core';
import { TransactionList } from '../../model/TransactionList';
import {Merchant} from "../../model/Merchant";
import {TransactionService} from "../../services/transaction.service";

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent implements OnInit {

  public transactionItems;
  public transactionsData;
  public sortByDate = true;
  public sortByAmount = false;
  public sortByBeneficiarie = false;

  @Input() set transactions(value: TransactionList[]) {
    this.transactionsData = this.transactionItems = value;
  }
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.dataAddedObservable.subscribe((data) => {
      if (data) {
        this.sortByDate = false;
        this.sortDataByDate();
      }
    });
  }

  getLogo(merchant: Merchant): string {
    return merchant.logo ? merchant.logo : 'assets/icons/' + merchant.name.toLowerCase().split(' ').join('-') + '.png';
  }

  merchantSearch(searchKey: string): void {
    this.transactionItems = this.transactionsData.filter(obj => obj.merchant.name.toLowerCase().indexOf(searchKey.toLowerCase()) === 0);
  }

  transactionSort(sortType): void {
    switch (sortType) {
      case 1:
        this.sortDataByDate();
        break;

      case 2:
        this.sortDataByBeneficiarie();
        break;

      case 3:
        this.sortDataByAmount();
        break;
    }
  }

  sortDataByDate(): void {
    this.sortByDate = !this.sortByDate;
    this.transactionItems = this.transactionItems.sort((first: TransactionList, second: TransactionList) => {
      const item = this.sortByDate ? (new Date(second.dates.valueDate).getTime() - new Date(first.dates.valueDate).getTime())
        : (new Date(first.dates.valueDate).getTime() - new Date(second.dates.valueDate).getTime());
      return item;
    });
  }

  sortDataByBeneficiarie(): void {
    this.sortByBeneficiarie = !this.sortByBeneficiarie;
    this.transactionItems = this.transactionItems.sort((first: TransactionList, second: TransactionList) => {
      const x = first.merchant.name.toUpperCase();
      const y = second.merchant.name.toUpperCase();
      if (this.sortByBeneficiarie) {
        return x === y ? 0 : x > y ? 1 : -1;
      } else {
        return x === y ? 0 : x < y ? 1 : -1;
      }
    });
  }

  sortDataByAmount(): void {
    this.sortByAmount = !this.sortByAmount;
    this.transactionItems = this.transactionItems.sort((first: TransactionList, second: TransactionList) => {
      const item = this.sortByAmount ? second.transaction.amountCurrency.amount - first.transaction.amountCurrency.amount
        : first.transaction.amountCurrency.amount - second.transaction.amountCurrency.amount;
      return item;
    });
  }

}
