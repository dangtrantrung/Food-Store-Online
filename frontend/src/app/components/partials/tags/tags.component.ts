import { Component, OnInit } from '@angular/core'
import { FoodService } from 'app/services/food.service'
import { Tag } from 'app/shared/models/Tag'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  tags!: Tag[]

  constructor(foodService: FoodService) {
    foodService.getAllTags().subscribe((serverTags) => {
      this.tags = serverTags
    })
  }

  ngOnInit() {}
}
