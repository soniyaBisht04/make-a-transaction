import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TransactionItemComponent} from './transaction-item.component';
import {TransactionService} from '../../services/transaction.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TransactionItemComponent', () => {
  let component: TransactionItemComponent;
  let fixture: ComponentFixture<TransactionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TransactionItemComponent],
      providers: [TransactionService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Check for sort default values', () => {
    expect(component.sortByAmount).toBe(false);
    expect(component.sortByBeneficiarie).toBe(false);
    expect(component.sortByDate).toBe(true);
  });
  it('Get Logo for transaction', () => {
    const merchantData = {
      name: 'Backbase',
      accountNumber: 'SI64397745065188826'
    };
    const result = component.getLogo(merchantData);
    expect(result).toBe('assets/icons/backbase.png');
  });
  it('Should search transaction by merchant name', () => {
    component.transactionsData = [{
      merchant: {
        name: 'Backbase'
      }
    },
      {
        merchant: {
          name: 'Backbase2'
        }
      }];
    component.merchantSearch('2');
    expect(component.transactionItems).toBeDefined();
  });
  it('Should call transactionSort with proper sort function', () => {
    spyOn(component, 'sortDataByBeneficiarie');
    component.transactionSort(2);
    expect(component.sortDataByBeneficiarie).toHaveBeenCalled();
  });

});
