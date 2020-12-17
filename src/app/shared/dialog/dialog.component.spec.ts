import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MAT_DIALOG_DATA, MatDialogTitle, MatDialogRef, MatDialogModule } from "@angular/material/dialog";
import { DialogComponent } from './dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { TranslateModule } from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  const dialogMock = {
    open: () => {},
    close: () => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule , BrowserDynamicTestingModule, TranslateModule.forRoot(), MatIconModule],
      declarations: [ DialogComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {dialogMock}},
        {provide: MatDialogTitle, useValue: {}},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have included 'content'`, () => {
    expect(fixture.nativeElement.querySelector('mat-dialog-content')).toBeDefined();
  });

  it(`should have included 'Action'`, () => {
    expect(fixture.nativeElement.querySelector('mat-dialog-actions')).toBeDefined();
  });
});
