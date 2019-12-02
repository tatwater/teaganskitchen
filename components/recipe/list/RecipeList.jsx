import Link from 'next/link';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Error from './empty/Error';
import Loading from './empty/Loading';
import NoResults from './empty/NoResults';

import { Container, Track, Item, Photo, Title, Description } from './styles';


const RECIPES_PER_PAGE = 10;

function RecipeList({ data: { error, recipes, loading }, typeFilters, loadMoreRecipes }) {
  if (error)
    return (
      <Error>{ console.log(error) }</Error>
    );
  if (recipes && recipes.length) {
    const areMoreRecipes = false;

    return (
      <Container>
        <h1>All recipes</h1>
        <Track>
          { recipes.map((recipe, index) => (
            <Link href={`/recipe/${recipe.url}`} key={ recipe.id }>
              <Item>
                <Photo>Photo coming soon</Photo>
                <Title>{ recipe.name }</Title>
                <Description>{ recipe.type }</Description>
              </Item>
            </Link>
          ))}
          { areMoreRecipes &&
            <button onClick={() => loadMoreRecipes()}>
              { loading ? 'Loading...' : 'Show More' }
            </button>
          }
        </Track>
      </Container>
    )
  }
  if (recipes) {
    return (
      <NoResults type={ typeFilters[0] } />
    )
  }
  return <Loading />
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
