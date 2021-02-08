import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A healthy Salad','https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80', [new Ingredient('Salad', 1), new Ingredient('Cucumber', 1)] ) ,
    new Recipe('New Test Recipe', 'A yummi Pizza with lots of cheese','https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80', [new Ingredient('Tomatoes', 3), new Ingredient('Cheese', 2)] )
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); //get a copy from recipes array since it's of reference type
  }

  // addIngredientsToShoppingList(ingredients: Ingredient[]) {
  //   this.slService.addIngredients(ingredients);
  // }

}
