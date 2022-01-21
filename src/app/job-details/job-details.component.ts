import { Company } from './../models/jobs.model';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Jobs } from '../models/jobs.model';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  @Input() book: any;
  @Input() bookId: any;
  src: any;
  companyres: any;
  details:any
  author: any;
  description:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const bookId = params['key'];
     
      return this.http
      .get<Jobs[]>('https://openlibrary.org' + bookId + '.json')
      .subscribe((response: any) => {
        console.log(response);   
        this.book = response;
        this.description=this.book.description;
        if(this.description.length>1){
          this.description= this.book.description.value
        }
        this.details= this.book.links[0].url
        const coverId= this.book.covers[0];

        this.src= 'https://covers.openlibrary.org/b/id/' + coverId + '.jpg'
        console.log(this.src);
        
        const authorId= this.book.authors[0].author.key
      
        return this.http
        .get('https://openlibrary.org' + authorId  + '.json')
        .subscribe((response:any)=>{
          this.author= response.personal_name      
        })
        
      
        
        

        })
        ;
      });
    }
}
