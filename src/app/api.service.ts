import { Injectable} from '@angular/core'
import { Http, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Entity } from './entity';
import { Item } from './item';
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {

  url: string = 'http://tivy/sites/all/modules/civicrm/extern/rest.php'
  apiKey: string = '123'
  siteKey: string = '80ed973a4e9e04c7c18b5b00292efe17'

  constructor(private http: Http) { }

  getEntities(): Observable<Entity[]> {
    return this.query('Entity', 'get', {}).map(json =>
      json.values.map(value => ({name: value}))
      .filter(value => !json.deprecated.includes(value.name))
    ) as Observable<Entity[]>
  }

  getItems(entity: Entity): Observable<Item[]> {
    return this.query(entity.name, 'get', {}).map(json =>
      json.values
    ) as Observable<Item[]>
  }

  private query(entity, action, params){
    let options = {params: this.constructParams(entity, action, params)}
    console.log
    return this.http.get(this.url, options)
    .map(response => response.json())
  }

  private constructParams(entity, action, params){
    let searchParams = new URLSearchParams()
    searchParams.set('api_key', this.apiKey)
    searchParams.set('key', this.siteKey)
    searchParams.set('entity', entity)
    searchParams.set('action', action)
    searchParams.set('params', params)
    searchParams.set('sequential', '1')
    searchParams.set('json', '1')
    return searchParams
  }
}
