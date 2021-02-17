import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
 recipe: Recipe;
 id: number;

 constructor(private sLService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //  const id = +this.route.snapshot.params['id'];
    // this.recipe = this.recipeService.getRecipe(id);
    this.route.params
        .subscribe( //get notified of changes in route params
          (params: Params) => {
            this.recipe = this.recipeService.getRecipe(+params['id']); //get back a string, cast it to number with +
          })

  }

  onAddToShoppingList() {
    this.sLService.addIngredients(this.recipe.ingredients) //ingredients are passed to recipe service
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    //ODER absoluten Pfad angeben
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

}
