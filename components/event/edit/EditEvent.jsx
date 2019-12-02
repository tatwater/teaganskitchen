import { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';

import Delete from '../delete/DeleteEvent';


class EditEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      url: '',
      starred: '',
      description: '',
      startTime: '',
      endTime: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.props.event.name,
      url: this.props.event.url,
      starred: this.props.event.starred,
      description: this.props.event.description,
      startTime: this.props.event.startTime,
      endTime: this.props.event.endTime,
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
    let starred = formData.get('starred') ? true : false;

    this.props.updateEvent(formData.get('name'),
                           formData.get('url'),
                           formData.get('description'),
                           starred,
                           formData.get('startTime'),
                           formData.get('endTime'));
                           form.reset();

    this.props.router.push('/event/' + formData.get('url'));
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event) }>
        <h1>Edit Event</h1>
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
        <input
          defaultValue={ this.state.description }
          name='description'
          onChange={(event) => this.handleChange(event) }
          placeholder='Description'
          required
          type='text'
        />
        <input
          defaultValue={ this.state.starred }
          name='starred'
          onChange={(event) => this.handleChange(event) }
          type='checkbox'
        />
        <input
          defaultValue={ this.state.startTime }
          name='startTime'
          onChange={(event) => this.handleChange(event) }
          placeholder='Start Time'
          required
          type='datetime-local'
        />
        <input
          defaultValue={ this.state.endTime }
          name='endTime'
          onChange={(event) => this.handleChange(event) }
          placeholder='End Time'
          required
          type='datetime-local'
        />
        <button type='submit'>Save</button>
        <Delete />
      </form>
    );
  }
}

const updateEvent = gql`
  mutation updateEvent($name: String!, $url: String!, $description: String!, $starred: Boolean, $startTime: DateTime!, $endTime: DateTime!) {
    updateEvent(data: { name: $name, url: $url, description: $description, starred: $starred, startTime: $startTime, endTime: $endTime }) {
      id
      name
      url
      description
      starred
      startTime
      endTime
    }
  }
`;

export default graphql(updateEvent, {
  props: ({ mutate }) => ({
    updateEvent: (id, name, url, description, starred, startTime, endTime) => {
      mutate({
        variables: { id, name, url, description, starred, startTime, endTime },
      });
    }
  }),
})(withRouter(EditEvent));
