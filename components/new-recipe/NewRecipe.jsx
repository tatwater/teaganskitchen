import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';

import { recipes, allRecipesQueryVars } from '../recipe-list/RecipeList';


function NewRecipe({ router, createRecipe }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new window.FormData(form);

    createRecipe(formData.get('name'),
                 formData.get('url'));
    form.reset();
    
    router.push('/recipe/' + formData.get('url'));
  }

  return (
    <form onSubmit={(event) => handleSubmit(event) }>
      <h1>New Recipe</h1>
      <input
        name='name'
        placeholder='Name'
        required
        type='text'
      />
      <input
        name='url'
        placeholder='URL'
        required
        type='text'
      />
      <button type='submit'>Save</button>
    </form>
  )
}

const createRecipe = gql`
  mutation createRecipe($name: String!, $url: String!) {
    createRecipe(data: { name: $name, url: $url }) {
      id
      name
      url
    }
  }
`;

export default graphql(createRecipe, {
  props: ({ mutate }) => ({
    createRecipe: (name, url) => {
      mutate({
        variables: { name, url },
        // update: (proxy, { data: { createRecipe } }) => {
        //   const data = proxy.readQuery({
        //     query: recipes,
        //     variables: allRecipesQueryVars,
        //   });

        //   proxy.writeQuery({
        //     query: recipes,
        //     data: {
        //       ...data,
        //       recipes: [createRecipe, ...data.recipes],
        //     },
        //     variables: allRecipesQueryVars,
        //   });
        // },
      })
    }
  }),
})(withRouter(NewRecipe));
