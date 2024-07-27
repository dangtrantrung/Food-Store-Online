import { Http } from '@angular/http'
import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {
  FOODS_BY_ID_URL,
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_TAGS_URL,
  FOODS_URL,
} from 'app/shared/models/constants/urls'
import { Food } from 'app/shared/models/Food'
import { Tag } from 'app/shared/models/Tag'
import { error } from 'console'
// import { sample_foods, sample_tags } from 'data'
// import { Observable } from 'rxjs'

@Injectable()
export class FoodService {
  constructor(private http: Http) {}
  getAll(): Observable<Food[]> {
    return this.http.get(FOODS_URL).map((resp) => resp.json())
  }

  getAllFoodBySearchTerm(searchTerm: string): Observable<Food[]> {
    return this.http
      .get(FOODS_BY_SEARCH_URL + searchTerm)
      .map((resp) => resp.json())
  }
  getFoodById(foodId: string): Observable<Food> {
    return this.http.get(FOODS_BY_ID_URL + foodId).map((resp) => resp.json())
  }
  getAllTags(): Observable<Tag[]> {
    return this.http.get(FOODS_TAGS_URL).map((resp) => resp.json())
  }
  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === 'All'
      ? this.getAll()
      : this.http.get(FOODS_BY_TAG_URL + tag).map((resp) => resp.json())
  }
}
