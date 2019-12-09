import { Component } from 'react';
import PropTypes from 'prop-types';
import { InstantSearch, Hits, Pagination, Highlight, ClearRefinements, RefinementList, Configure } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';

import { Container, Header, CustomSearchBox, Results } from './styles';


const HitComponent = ({ hit }) => (
  <div>
    <div>
      <img alt={ hit.name} src={`${ hit.image }`} />
    </div>
    <div>
      <div>
        <Highlight attributeName='name' hit={ hit } />
      </div>
      {/* <div>
        <Highlight attributeName='REPLACE' hit={ hit } />
      </div> */}
    </div>
  </div>
)

HitComponent.propTypes = {
  hit: PropTypes.object.isRequired,
}

const searchClient = algoliasearch(
  '7PIWDGBJB6',
  '59de6132b62ee777ef33d7be4c98d957',
);

class Search extends Component {
  render() {
    return (
      <Container>
        <InstantSearch
          indexName='recipe'
          searchClient={ searchClient }
        >
          <Configure hitsPerPage={ 10 } />
          <Header>
            <h1>Let's eat</h1>
            <CustomSearchBox />
          </Header>
          <Results>
            <div>
              <RefinementList attribute='category' />
            </div>
            <div>
              <Hits hitComponent={ HitComponent } />
            </div>
          </Results>
        </InstantSearch>
      </Container>
    );
  }
}

export default Search;
