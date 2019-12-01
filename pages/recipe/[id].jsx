import withApollo from '../../lib/withApollo';

import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/recipe/header';
import Photo from '../../components/recipe/photo';


export default withApollo(() => (
  <div>
    <Navbar />
    <Header />
    <Photo />
  </div>
));
