import {Merchant} from './Merchant';
import {Transaction} from './Transaction';
import {Dates} from './Dates';

export interface TransactionList {
  categoryCode: string;
  dates: Dates;
  transaction: Transaction;
  merchant: Merchant;
}
