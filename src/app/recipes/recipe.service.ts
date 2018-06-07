import { Recipe } from './recipe.model';
export class RecipeService {
private recipes: Recipe[] = [
    new Recipe('Test1 recipe', 'This is simple Test recipe Description',
    'https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg?downsize=650:400&output-quality=70&output-format=webp'),
    new Recipe('Test2 recipe', 'This is simple Test recipe Description',
    'https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg?downsize=650:400&output-quality=70&output-format=webp'),
    new Recipe('Test3 recipe', 'This is simple Test recipe Description',
    'https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg?downsize=650:400&output-quality=70&output-format=webp')

  ];

  getRecipes() {
    return this.recipes.slice();
  }
  constructor() { }

}
