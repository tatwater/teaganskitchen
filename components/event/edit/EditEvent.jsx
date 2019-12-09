import { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';

import Delete from '../delete/DeleteEvent';

import { NameField } from './styles';


class EditEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      url: '',
      starred: false,
      description: '',
      startTime: '',
      endTime: '',
      date: '',
      address: '',
      dishes: [],
      allowSuggestedDishes: false,
      guests: []
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
      date: this.props.event.date,
      address: this.props.event.address,
      dishes: this.props.event.dishes,
      allowSuggestedDishes: this.props.event.allowSuggestedDishes,
      guests: this.props.event.guests
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
                           starred,
                           formData.get('description'),
                           formData.get('startTime'),
                           formData.get('endTime'),
                           formData.get('date'),
                           formData.get('address'),
                           formData.get('dishes'),
                           formData.get('allowSuggestedDishes'),
                           formData.get('guests'));
                           form.reset();

    this.props.router.push('/event/' + formData.get('url'));
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event) }>
        <NameField
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
          defaultChecked={ this.state.starred }
          name='starred'
          onChange={(event) => this.handleChange(event) }
          type='checkbox'
        />
        <label htmlFor='starred'>Starred</label>
        <input
          defaultValue={ this.state.description }
          name='description'
          onChange={(event) => this.handleChange(event) }
          placeholder='Description'
          required
          type='text'
        />
        <input
          defaultValue={ this.state.startTime }
          name='startTime'
          onChange={(event) => this.handleChange(event) }
          placeholder='Start Time'
          required
          type='text'
        />
        <input
          defaultValue={ this.state.endTime }
          name='endTime'
          onChange={(event) => this.handleChange(event) }
          placeholder='End Time'
          required
          type='text'
        />
        <input
          defaultValue={ this.state.date }
          name='date'
          onChange={(event) => this.handleChange(event) }
          placeholder='Date'
          required
          type='text'
        />
        <input
          defaultValue={ this.state.address }
          name='address'
          onChange={(event) => this.handleChange(event) }
          placeholder='Address'
          required
          type='text'
        />
        <input
          defaultChecked={ this.state.allowSuggested }
          name='allowSuggested'
          onChange={(event) => this.handleChange(event) }
          type='checkbox'
        />
        <label htmlFor='allowSuggested'>Allow suggested dishes</label>
        <button type='submit'>Save</button>
        <Delete />
      </form>
    );
  }
}

const updateEvent = gql`
  mutation updateEvent($name: String!,
                       $url: String!,
                       $starred: Boolean,
                       $description: String!,
                       $startTime: String,
                       $endTime: String,
                       $date: DateTime,
                       $address: Address
                       $dishes: [Recipe]
                       $allowSuggestedDishes: Boolean,
                       $guests: [Guest]) {
    updateEvent(data: { name: $name,
                        url: $url,
                        starred: $starred,
                        description: $description,
                        startTime: $startTime,
                        endTime: $endTime,
                        date: $date,
                        address: $address,
                        dishes: $dishes,
                        allowSuggestedDishes: $allowSuggestedDishes,
                        guests: $guests }) {
      id
      name
      url
      starred
      description
      startTime
      endTime
      date
      address
      dishes
      allowSuggestedDishes
      guests
    }
  }
`;

export default graphql(updateEvent, {
  props: ({ mutate }) => ({
    updateEvent: (id, name, url, starred, description, startTime, endTime, date, address, dishes, allowSuggestedDishes, guests) => {
      mutate({
        variables: { id, name, url, starred, description, startTime, endTime, date, address, dishes, allowSuggestedDishes, guests },
      });
    }
  }),
})(withRouter(EditEvent));
