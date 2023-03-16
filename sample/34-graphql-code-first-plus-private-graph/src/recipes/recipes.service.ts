import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  mockRecipes: Recipe[] = [
    {
      id: 'abc',
      creationDate: new Date(),
      title: 'lemonade',
      description:
        'when life gives you lemon, this string has to be 30 chars or more',
      ingredients: ['lemon'],
    },
    {
      id: 'bcd',
      creationDate: new Date(),
      title: 'lemonade',
      description:
        'when life gives you lemon, this string has to be 30 chars or more',
      ingredients: ['lemon'],
    },
  ];

  async create(data: NewRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return this.mockRecipes.find(recipe => recipe.id === id);
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.mockRecipes;
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
