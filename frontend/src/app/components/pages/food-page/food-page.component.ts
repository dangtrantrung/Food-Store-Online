import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FoodService } from 'app/services/food.service'
import { Food } from 'app/shared/models/Food'

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) this.food = foodService.getFoodById(params.id)
    })
  }

  ngOnInit() {}
}
