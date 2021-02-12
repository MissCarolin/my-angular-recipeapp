import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
{ path: '', redirectTo: '/recipes',  pathMatch: 'full' },
{ path: 'recipes' , component: RecipesComponent },
{ path: 'shopping-list' , component: ShoppingListComponent },
];

@NgModule({
    imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true}) --> hash is for older browsers that can't return the index.html file because they thorow a 404 error before parsing the index html file
    RouterModule.forRoot(appRoutes) //adds routing functionality to app, registers with forRoot the defined paths
    ],
    exports: [RouterModule] //tells angular Models it is importet in what is accessible from that module
})
export class AppRoutingModule {

}