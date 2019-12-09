import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Message, Form, FieldWrapper, Label, Input } from './styles';


async function handleSubmit(event) {
  console.log(event);
}

function SignIn() {
  return (
    <Container>
      <Message>
        <h1>Hi there!</h1>
      </Message>
      <Form onSubmit={(event) => handleSubmit(event) }>
        <h3>Sign in</h3>
        <FieldWrapper>
          <Input
            name='email'
            type='email'
          />
          <Label htmlFor='email'>Email</Label>
        </FieldWrapper>
        <FieldWrapper>
          <Input
            name='password'
            type='password'
          />
          <Label htmlFor='password'>Password</Label>
        </FieldWrapper>
      </Form>
    </Container>
  );
}

export default SignIn;
