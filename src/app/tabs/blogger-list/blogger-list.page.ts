import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { throwError } from 'rxjs';
import { BloggerService } from 'src/app/services/blogger.service';

@Component({
  selector: 'app-blogger-list',
  templateUrl: './blogger-list.page.html',
  styleUrls: ['./blogger-list.page.scss'],
})
export class BloggerListPage implements OnInit, ViewWillEnter {

  public bloggers;

  constructor(private bloggerService: BloggerService,
    private router: Router) { }

  ionViewWillEnter(): void {
    this.getBloggersList();
  }

  ngOnInit() {}


  getBloggersList() {
    this.bloggerService.getBloggers().toPromise()
      .then((bloggersData: any) => this.bloggers = bloggersData.bloggers)
      .catch(err => throwError(err))
  }

  viewBlogger(id: string) {
    this.router.navigate(['home/blogger-detail'], { queryParams: { id } })
  }

  deleteBlogger(id: string) {

    this.bloggerService.deleteBlogger(id).toPromise()
      .then( () => alert('Blogger deleted'))
      .catch((err) => throwError(err))
      .finally(() => this.getBloggersList());

    ;
  }

}
