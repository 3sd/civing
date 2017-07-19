import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
})
export class MainMenuComponent {

  //TODO define link object
  links: object[]

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getLinks()
  }

  getLinks() {
    this.api.getEntities().subscribe(result => {
      this.links = result.map(entity => ({text:entity.name}))
    })
  }
}
