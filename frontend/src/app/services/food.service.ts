import { Injectable } from '@angular/core'
import { Food } from 'app/shared/models/Food'
import { sample_foods } from 'data'

@Injectable()
export class FoodService {
  constructor() {}
  getAll(): Food[] {
    return sample_foods
  }
  getAllFoodBySearchTerm(searchTerm: string) {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }
  getFoodById(foodId:string):Food{
    return  this.getAll().find(food=>food.id==foodId)??new Food();
  }
}
