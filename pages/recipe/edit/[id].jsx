import withApollo from '../../../lib/withApollo';

import GlobalLayout from '../../../layouts/GlobalLayout';
import EditRecipeContainer from '../../../components/recipe/edit/EditRecipeContainer';


export default withApollo(() => (
  <GlobalLayout>
    <EditRecipeContainer />
  </GlobalLayout>
));
