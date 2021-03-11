import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public tabs = [
    {
      tab: 'blogger-new',
      icon: 'person-add-outline',
      name: 'Blogger',
    },
    {
      tab: 'blogger-list',
      icon: 'list-outline',
      name: 'List',
    },
    {
      tab: 'search',
      icon: 'search-outline',
      name: 'Search',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
