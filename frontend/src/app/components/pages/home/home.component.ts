import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FoodService } from 'app/services/food.service'
import { Food } from 'app/shared/models/Food'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[]
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute,
  ) {
    let foodsObservable: Observable<Food[]>
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        foodsObservable = this.foodService.getAllFoodBySearchTerm(
          params.searchTerm,
        )
        foodsObservable.subscribe((serverFoods) => {
          this.foods = serverFoods
        })
      } else if (params.tag) {
        foodsObservable = this.foodService.getAllFoodsByTag(params.tag)
        foodsObservable.subscribe((serverFoods) => {
          this.foods = serverFoods
        })
      } else {
        // console.log('get all', foodService.getAll())

        foodsObservable = foodService.getAll()
        foodsObservable.subscribe((serverFoods) => {
          this.foods = serverFoods
        })
      }
    })
  }

  ngOnInit() {}
}
