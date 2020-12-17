import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-sort',
  templateUrl: './search-sort.component.html',
  styleUrls: ['./search-sort.component.scss']
})
export class SearchSortComponent implements OnInit {

  @Output() onMerchantSearch = new EventEmitter();
  @Output() onSort = new EventEmitter();
  searchMerchant = new FormControl();
  public sortByDate = true;
  public sortByBeneficiaries = false;
  public sortByAmount = false;

  constructor() { }

  ngOnInit(): void {
    this.searchMerchant.valueChanges.pipe().subscribe((value) => {
      this.onMerchantSearch.emit(value);
    });
  }

  clearInput(): void {
    this.searchMerchant.patchValue('');
  }
  sortData(sortType: number): void {
    if (sortType === 1) {
      this.sortByDate = !this.sortByDate;
    } else if (sortType === 2) {
      this.sortByBeneficiaries = !this.sortByBeneficiaries;
    } else if (sortType === 3) {
      this.sortByAmount = !this.sortByAmount;
    }
    this.onSort.emit(sortType);
  }

}
