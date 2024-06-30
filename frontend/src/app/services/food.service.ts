import { Injectable } from '@angular/core'
import { Food } from 'app/shared/models/Food'
import { sample_foods } from 'data'

@Injectable()
export class FoodService {
  constructor() {}
  getAll(): Food[] {
    return sample_foods
  }
}
