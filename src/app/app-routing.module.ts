import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EntityListComponent } from './entity-list.component'
import { EntityDetailComponent } from './entity-detail.component'

let appRoutes = [
  {
    path: 'list/:entity',
    component: EntityListComponent
  },
  {
    path: 'detail/:entity/:id',
    component: EntityDetailComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
