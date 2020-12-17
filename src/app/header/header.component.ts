import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language = new FormControl('en');
  constructor(private translateService: TranslateService) { }
  ngOnInit(): void {
    this.language.valueChanges.pipe().subscribe(value => {
      this.translateService.use(value);
    });
  }

}
