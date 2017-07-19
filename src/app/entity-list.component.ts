import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/switchMap';

import { ApiService } from './api.service';

import { Entity } from './entity';
import { Filter } from './filter';
import { Item } from './item';

@Component({
  selector: 'entity-list',
  templateUrl: './entity-list.component.html',
})
export class EntityListComponent {

  entity: Entity

  filter: Filter

  items: Item[]

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.entity = {name: paramMap.get('entity')}
      this.api.getItems(this.entity).subscribe(items => this.items = items)
    });
  }
}
