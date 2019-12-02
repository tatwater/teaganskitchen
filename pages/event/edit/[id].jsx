import withApollo from '../../../lib/withApollo';

import GlobalLayout from '../../../layouts/GlobalLayout';
import EditEventContainer from '../../../components/event/edit/EditEventContainer';


export default withApollo(() => (
  <GlobalLayout>
    <EditEventContainer />
  </GlobalLayout>
));
