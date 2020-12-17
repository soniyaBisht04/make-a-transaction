import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent implements OnInit, OnDestroy {
  balanceInAccount = 12050;
  makeTransaction = this.fb.group({
                                   fromAccount: [{value: 'Free checking', disabled: true}],
                                   toAccount: ['', [Validators.required]],
                                   amount: ['', [Validators.required]]
                                 });
  private subscriptions: Subscription = new Subscription();
  constructor(private fb: FormBuilder, private dialog: MatDialog , private transactionService: TransactionService){ }
  ngOnInit(): void {
  }
  ngOnDestroy(): void{
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  confirmTransaction() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      data: {
        title: 'Confirm Transaction',
        fromAccount : this.makeTransaction.get('fromAccount').value,
        toAccount: this.makeTransaction.get('toAccount').value,
        amount: this.makeTransaction.get('amount').value,
        balance: this.balanceInAccount
      }
    });
    this.subscriptions.add(dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.balanceInAccount = this.balanceInAccount - this.makeTransaction.get('amount').value;
        this.transactionService.addLocalTransaction(this.makeTransaction.value);
        this.makeTransaction.reset();
        this.makeTransaction.patchValue({
          fromAccount: 'Free checking'
        });
      }
    }));
  }
  isTransferEnable(): boolean {
    return this.makeTransaction.valid && (this.balanceInAccount - this.makeTransaction.get('amount').value > -500);
  }

}
