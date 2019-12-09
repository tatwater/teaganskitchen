import RecipeList from '../../recipe/list/RecipeList';

import { Container } from './styles';


export default () => (
  <Container>
    <RecipeList
      center={ true }
      withSuggestButton={ true }
    />
  </Container>
);
