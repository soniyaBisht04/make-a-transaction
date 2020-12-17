import { TestBed } from '@angular/core/testing';
import { TransactionService } from './transaction.service';
import { NO_ERRORS_SCHEMA, Type} from "@angular/core";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('TransactionService', () => {
  let service: TransactionService;
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });

  });
  beforeEach(() => {
    service = TestBed.inject(TransactionService);
    httpMock = TestBed.get(HttpTestingController as Type<HttpTestingController>);
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getTransaction and get a list', () => {
    const responseData = {
      "data": []
    };
    service.getTransaction().subscribe((res) => {});
    const req = httpMock.expectOne('assets/mock/transactions.json');
    expect(req.request.method).toEqual('GET');
    req.flush(responseData);
  });
  it('should call addLocalTransaction', () => {
    const data = {
      "toAccount": "xyz",
      "fromAccount": "abc",
      "balance": 50,
      "amount": 100
    };
    service.addLocalTransaction(data);
    expect(service.localTransactions.getValue().categoryCode).toEqual('#12a580');
  });


});
