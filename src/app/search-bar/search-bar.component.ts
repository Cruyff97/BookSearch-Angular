import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jobs } from '../models/jobs.model';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  books: Jobs[] = [];
  selectedValue: string | undefined;
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  inputCategory: string = '';
author:any
  constructor(private http: HttpClient, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }
  ngOnInit(): void {}
  public onSubmit(inputCategory: any) {
    document.getElementById('spinner')!.style.display = 'table';
    stopSpinner();
    return this.http.get('https://openlibrary.org/subjects/' + this.inputCategory + '.json?limit=20')
    .subscribe((response: any) => {
        this.books = response.works;

        
      });
  }
}

function stopSpinner() {
  {
    setTimeout(function stop() {
      document.getElementById('spinner')!.style.display = 'none';
    }, 1000);
  }
}
