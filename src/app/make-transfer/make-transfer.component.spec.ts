import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TransactionService } from "../services/transaction.service";
import { MakeTransferComponent } from './make-transfer.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MAT_DIALOG_DATA , MatDialogModule, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { TranslateModule } from "@ngx-translate/core";


describe('MakeTransferComponent', () => {
  let component: MakeTransferComponent;
  let fixture: ComponentFixture<MakeTransferComponent>;
  const dialogMock = {
    open: () => {},
    close: () => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatDialogModule, HttpClientTestingModule, TranslateModule.forRoot()],
      declarations: [ MakeTransferComponent ],
      providers: [
        TransactionService,
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {dialogMock}},
        {provide: MatDialogTitle, useValue: {}},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have value of From Account', () => {
    expect(component.makeTransaction.get('fromAccount').value).toBe('Free checking');
  });
  it('should call function from button click', () => {
    spyOn(component, 'confirmTransaction');
    expect(fixture.nativeElement.querySelector('button')).toBeDefined();
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.confirmTransaction).toHaveBeenCalled();
  });
});
