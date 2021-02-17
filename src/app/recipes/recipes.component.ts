import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
// import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;


  constructor() { }

// outdated durch routing
  ngOnInit() { //set up event Listener
    // this.recipeService.recipeSelected
    //   .subscribe( //get informed about changes
    //     (recipe: Recipe) => {
    //       this.selectedRecipe = recipe; //set selectedRecipe equal to the recipe we get with the event
    //     }
    //   );
  }

}
