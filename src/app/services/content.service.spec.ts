import { TestBed } from '@angular/core/testing';
import { ContentService } from './content.service';
import { NO_ERRORS_SCHEMA, Type} from "@angular/core";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TransactionService} from "./transaction.service";

describe('ContentService', () => {
  let service: ContentService;
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });

  });
  beforeEach(() => {
    service = TestBed.inject(ContentService);
    httpMock = TestBed.get(HttpTestingController as Type<HttpTestingController>);
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getTransaltaion with en', () => {
    const responseData = {
      "data": []
    };
    service.getTranslation('en').subscribe((res) => {});
    const req = httpMock.expectOne('assets/i18n/en.json');
    expect(req.request.method).toEqual('GET');
    req.flush(responseData);
  });
});
