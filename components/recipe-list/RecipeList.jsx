import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const RECIPES_PER_PAGE = 10;

function RecipeList({ data: { error, recipes, loading }, typeFilters, loadMoreRecipes }) {
  if (error)
    return (
      <div>Error loading recipes { console.log(error) }</div>
    );
  if (recipes && recipes.length) {
    const areMoreRecipes = false;

    return (
      <section>
        <ul>
          { recipes.map((recipe, index) => (
            <li key={recipe.id}>
              <div>
                <a href={`/recipe/${recipe.url}`}>
                  { recipe.name }
                  <br />
                  { recipe.type }
                </a>
              </div>
            </li>
          ))}
        </ul>
        { areMoreRecipes &&
          <button onClick={() => loadMoreRecipes()}>
            { loading ? 'Loading...' : 'Show More' }
          </button>
        }
      </section>
    )
  }
  if (recipes) {
    return (
      <div>No { typeFilters[0] } recipes to display</div>
    )
  }
  return <div>Loading</div>
}

export const recipes = gql`
  query recipes($first: Int!, $skip: Int!, $type_in: [String!]) {
    recipes(where: { type_in: $type_in }, orderBy: name_ASC, first: $first, skip: $skip) {
      id
      name
      url
      type
    }
  }
`;

export const allRecipesQueryVars = {
  skip: 0,
  first: RECIPES_PER_PAGE,
}

export default graphql(recipes, {
  options: ({ typeFilters=['main', 'side', 'bite', 'bread', 'dessert', 'drink'] }) => ({
    variables: {...allRecipesQueryVars, type_in: typeFilters},
  }),
  props: ({ data }) => ({
    data,
    loadMoreRecipes: () => {
      return data.fetchMore({
        variables: {
          skip: data.recipes.length,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }
          return Object.assign({}, previousResult, {
            recipes: [...previousResult.recipes, ...fetchMoreResult.recipes],
          });
        },
      })
    },
  }),
})(RecipeList)
