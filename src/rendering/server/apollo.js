import { withApollo } from 'next-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
const API_URI = `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`
// const API_URI = `${ process.env.NEXT_PUBLIC_SERVER_URL }/graphql`
const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    headers: {
        fetchOptions: {
            mode: 'no-cors',
        },
    },
});
export default withApollo(apolloClient);