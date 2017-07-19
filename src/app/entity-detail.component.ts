import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ApiService } from './api.service';

import { Entity } from './entity';
import { Filter } from './filter';
import { Item } from './item';


@Component({
  selector: 'entity-detail',
  templateUrl: './entity-detail.component.html',
})
export class EntityDetailComponent {

  type: Entity

  item: Item

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  get() {
  }
}
