import withApollo from '../../lib/withApollo';

import GlobalLayout from '../../layouts/GlobalLayout';
import Header from '../../components/recipe/header/Header';


export default withApollo(() => (
  <GlobalLayout>
    <Header />
  </GlobalLayout>
));
