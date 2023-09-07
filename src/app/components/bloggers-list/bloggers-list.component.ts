import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Blogger } from 'src/app/shared/models/blogger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bloggers-list',
  templateUrl: './bloggers-list.component.html',
  styleUrls: ['./bloggers-list.component.scss']
})

export class BloggersListComponent {
  private router = inject(Router);

  displayedColumns: string[] = ['id', 'image', 'name', 'website', 'actions'];
  dataSource: MatTableDataSource<Blogger>;
  bloggers: Blogger[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {
    this.chargeBloggers();
    this.bloggers = this.loadBloggers();
    this.dataSource = new MatTableDataSource(this.bloggers);
  }

  chargeBloggers(): void {
    if (localStorage.getItem('bloggers') == null ||
      localStorage.getItem('bloggers') == undefined) {
        
      let bloggers: Blogger[] = [
        {
          id: 1,
          name: "Juan Perez",
          website: "juanperez.io",
          picture_url: "https://placekitten.com/200/300",
          email: "conact@juanperez.io",
          friends: []
        },
        {
          id: 2,
          name: "Amano Pikamee",
          website: "pikamee.io",
          picture_url: "https://placekitten.com/200/300",
          email: "contact@pikamee.io",
          friends: [1]
        },
        {
          id: 3,
          name: "Tony Stark",
          website: "tonystark.io",
          picture_url: "https://placekitten.com/200/300",
          email: "contact@tonystark.io",
          friends: [1, 2]
        }
      ];
      localStorage.setItem("bloggers", JSON.stringify(bloggers));
    }
  }

  loadBloggers(): Blogger[] {
    let bloggers: Blogger[] = JSON.parse(localStorage.getItem('bloggers'));
    this.bloggers = bloggers;
    return bloggers;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add(): void {
    this.router.navigate(['/add-blogger']);
  }

}
