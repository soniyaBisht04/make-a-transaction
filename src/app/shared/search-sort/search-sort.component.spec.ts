import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchSortComponent } from './search-sort.component';
import { TranslateModule } from "@ngx-translate/core";

describe('SearchSortComponent', () => {
  let component: SearchSortComponent;
  let fixture: ComponentFixture<SearchSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ SearchSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Check for sort default values', () => {
    expect(component.sortByAmount).toBe(false);
    expect(component.sortByBeneficiaries).toBe(false);
    expect(component.sortByDate).toBe(true);
  });
  it('Should call clearInput and clear value', () => {
    component.clearInput();
    expect(component.searchMerchant.value).toBe('');
  });
  it('Should call sort data and sortBy value should change', () => {
    component.sortData(1);
    expect(component.sortByDate).toBe(false);
  });
});
