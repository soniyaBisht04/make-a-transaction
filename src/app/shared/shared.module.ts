import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogComponent} from './dialog/dialog.component';
import {SearchSortComponent} from './search-sort/search-sort.component';
import {TransactionItemComponent} from './transaction-item/transaction-item.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [DialogComponent, SearchSortComponent, TransactionItemComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [CommonModule, DialogComponent, SearchSortComponent, TransactionItemComponent, TranslateModule],
  entryComponents: [DialogComponent]
})
export class SharedModule {
}
