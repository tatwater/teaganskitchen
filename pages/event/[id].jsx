import withApollo from '../../lib/withApollo';

import GlobalLayout from '../../layouts/GlobalLayout';
import Header from '../../components/event/header/Header';
import Attendees from '../../components/event/attendees/Attendees';
import StandardNotes from '../../components/event/standard-notes/StandardNotes';
import Previous from '../../components/event/previous/Previous';


export default withApollo(() => (
  <GlobalLayout>
    <Header />
    <Attendees />
    <StandardNotes />
    <Previous />
  </GlobalLayout>
));
