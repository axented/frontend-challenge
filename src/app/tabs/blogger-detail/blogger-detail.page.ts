import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { BloggerService } from 'src/app/services/blogger.service';

@Component({
  selector: 'app-blogger-detail',
  templateUrl: './blogger-detail.page.html',
  styleUrls: ['./blogger-detail.page.scss'],
})
export class BloggerDetailPage implements OnInit {

  public bloggerData;

  constructor( private activatedRoute: ActivatedRoute, private bloggerService: BloggerService) {
    this.getBloggerDetails()
  }

  ngOnInit() {

    
  }

  async getBloggerDetails(){

    let param;
    await this.activatedRoute.queryParams.subscribe( paramsResponse => param = paramsResponse)

    await this.bloggerService.getBloggerById( param.id ).toPromise()
    .then( bloggerResponse => this.bloggerData = bloggerResponse )
    .catch( err => throwError(err));

    console.log( 'bloggerData ',this.bloggerData )

  }

}
