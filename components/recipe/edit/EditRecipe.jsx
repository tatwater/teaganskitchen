import { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';

import Delete from '../delete/Delete';


class EditRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      url: '',
      type: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.props.recipe.name,
      url: this.props.recipe.url,
      type: this.props.recipe.type,
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new window.FormData(form);

    this.props.updateRecipe(this.props.recipe.id,
                            formData.get('name'),
                            formData.get('url'),
                            formData.get('type'));
    form.reset();

    this.props.router.push('/recipe/' + formData.get('url'));
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event) }>
        <h1>Edit Recipe</h1>
        <input
          defaultValue={ this.state.name }
          name='name'
          onChange={(event) => this.handleChange(event) }
          placeholder='Name'
          required
          type='text'
        />
        <input
          defaultValue={ this.state.url }
          name='url'
          onChange={(event) => this.handleChange(event) }
          placeholder='URL'
          required
          type='text'
        />
        <select
          name='type'
          onChange={(event) => this.handleChange(event) }
          required
          value={ this.state.type }
        >
          <option value='main'>Main</option>
          <option value='side'>Side</option>
          <option value='bite'>Bite</option>
          <option value='bread'>Bread</option>
          <option value='dessert'>Dessert</option>
          <option value='drink'>Drink</option>
        </select>
        <button type='submit'>Save</button>
        <Delete />
      </form>
    );
  }
}

const updateRecipe = gql`
  mutation updateRecipe($id: ID!, $name: String!, $url: String!, $type: String!) {
    updateRecipe(data: { name: $name, url: $url, type: $type }, where: { id: $id }) {
      id
      name
      url
      type
    }
  }
`;

export default graphql(updateRecipe, {
  props: ({ mutate }) => ({
    updateRecipe: (id, name, url, type) => {
      mutate({
        variables: { id, name, url, type },
      });
    }
  }),
})(withRouter(EditRecipe));
