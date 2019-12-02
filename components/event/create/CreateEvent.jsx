import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';


function CreateEvent({ router, createEvent }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new window.FormData(form);
    let starred = formData.get('starred') ? true : false;

    createEvent(formData.get('name'),
                formData.get('url'),
                formData.get('description'),
                starred,
                formData.get('startTime'),
                formData.get('endTime'));
    form.reset();
    
    router.push('/event/' + formData.get('url'));
  }

  return (
    <form onSubmit={(event) => handleSubmit(event) }>
      <h1>New Event</h1>
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
      <input
        name='description'
        placeholder='Description'
        required
        type='text'
      />
      <input
        name='starred'
        type='checkbox'
      />
      <input
        name='startTime'
        placeholder='Start Time'
        required
        type='datetime-local'
      />
      <input
        name='endTime'
        placeholder='End Time'
        required
        type='datetime-local'
      />
      <button type='submit'>Save</button>
    </form>
  )
}

const createEvent = gql`
  mutation createEvent($name: String!, $url: String!, $description: String!, $starred: Boolean, $startTime: DateTime!, $endTime: DateTime!) {
    createEvent(data: { name: $name, url: $url, description: $description, starred: $starred, startTime: $startTime, endTime: $endTime }) {
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

export default graphql(createEvent, {
  props: ({ mutate }) => ({
    createEvent: (name, url, description, starred, startTime, endTime ) => {
      mutate({
        variables: { name, url, description, starred, startTime, endTime  },
      })
    }
  }),
})(withRouter(CreateEvent));
