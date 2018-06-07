import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";

const appRouts: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {path: 'shopping-list', component: ShoppingListComponent },
    {path: 'recipes', component: RecipesComponent }
]

@NgModule({
 imports: [RouterModule.forRoot(appRouts)],
 exports: [RouterModule]
})
export class AppRoutingModule {

}