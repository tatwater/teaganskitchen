import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';


function NewRecipe({ router, createRecipe }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new window.FormData(form);

    createRecipe(formData.get('name'),
                 formData.get('url'),
                 formData.get('type'));
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
      <select
        name='type'
        required
      >
        <option value='main'>Main</option>
        <option value='side'>Side</option>
        <option value='bite'>Bite</option>
        <option value='bread'>Bread</option>
        <option value='dessert'>Dessert</option>
        <option value='drink'>Drink</option>
      </select>
      <button type='submit'>Save</button>
    </form>
  )
}

const createRecipe = gql`
  mutation createRecipe($name: String!, $url: String!, $type: String!) {
    createRecipe(data: { name: $name, url: $url, type: $type }) {
      id
      name
      url
      type
    }
  }
`;

export default graphql(createRecipe, {
  props: ({ mutate }) => ({
    createRecipe: (name, url, type) => {
      mutate({
        variables: { name, url, type },
      })
    }
  }),
})(withRouter(NewRecipe));
