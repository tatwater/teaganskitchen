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
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.props.recipe.name,
      url: this.props.recipe.url,
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
                            formData.get('url'));
    form.reset();

    this.props.router.push('/recipe/' + formData.get('url'));
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event) }>
        <h1>Edit Recipe</h1>
        <input
          name='name'
          onChange={(event) => this.handleChange(event) }
          placeholder='Name'
          required
          type='text'
          defaultValue={ this.state.name }
        />
        <input
          name='url'
          onChange={(event) => this.handleChange(event) }
          placeholder='URL'
          required
          type='text'
          defaultValue={ this.state.url }
        />
        <button type='submit'>Save</button>
        <Delete />
      </form>
    );
  }
}

const updateRecipe = gql`
  mutation updateRecipe($id: ID!, $name: String!, $url: String!) {
    updateRecipe(data: { name: $name, url: $url }, where: { id: $id }) {
      id
      name
      url
    }
  }
`;

export default graphql(updateRecipe, {
  props: ({ mutate }) => ({
    updateRecipe: (id, name, url) => {
      mutate({
        variables: { id, name, url },
      });
    }
  }),
})(withRouter(EditRecipe));
