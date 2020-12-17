import {AmountCurrency} from './AmountCurrency';

export interface Transaction {
  type: string;
  creditDebitIndicator: string;
  amountCurrency: AmountCurrency;
}
