import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import Head from 'next/head';

import initApollo from './initApollo';


function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

export default ComposedComponent => {
  return class WithApollo extends React.Component {
    static displayName = `WithApollo(${getComponentDisplayName(
      ComposedComponent
    )})`;
    static propTypes = {
      serverState: PropTypes.object.isRequired,
    }
    static async getInitialProps(ctx) {
      let serverState = {
        apollo: {
          data: {},
        },
      }
      let composedInitialProps = {};

      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      if (typeof window === 'undefined') {
        const apollo = initApollo();

        try {
          await getDataFromTree(
            <ApolloProvider client={ apollo }>
              <ComposedComponent {...composedInitialProps} />
            </ApolloProvider>,
            {
              router: {
                asPath: ctx.asPath,
                pathname: ctx.pathname,
                query: ctx.query,
              },
            }
          )
        } catch (error) {
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
        }

        Head.rewind();

        const state = {};

        serverState = Object.assign(state, {
          apollo: { data: apollo.cache.extract() },
        });
      }

      return {
        serverState,
        ...composedInitialProps,
      }
    }

    constructor(props) {
      super(props);

      this.apollo = initApollo(props.serverState.apollo.data);
    }

    render() {
      return (
        <ApolloProvider client={ this.apollo }>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  }
}
