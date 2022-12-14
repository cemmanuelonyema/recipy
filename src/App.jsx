import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { RecipeProvider } from './context/recipe/RecipeProvider';
import { Home } from './pages/home/Home';
import { RecipeDetail } from './pages/recipeDetail/RecipeDetail';
import { RecipesPage } from './pages/recipesPage/RecipesPage';

export const App = () => {
      return (
            <Fragment>
                  <RecipeProvider>
                        <Routes>
                              <Route path="/" element={<Layout />}>
                                    <Route path="/" index element={<Home />} />
                                    <Route
                                          path="recipes"
                                          element={<RecipesPage />}
                                    />
                                    <Route
                                          path="recipes/:id"
                                          element={<RecipeDetail />}
                                    />
                              </Route>
                        </Routes>
                  </RecipeProvider>
            </Fragment>
      );
};
