import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipe: Recipe;

 constructor(private sLService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.sLService.addIngredients(this.recipe.ingredients) //ingredients are passed to recipe service
  }

}
