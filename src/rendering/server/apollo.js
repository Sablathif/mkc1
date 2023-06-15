// import { withApollo } from 'next-apollo';
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
// const API_URI = `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`;
// // const API_URI = `${ process.env.NEXT_PUBLIC_SERVER_URL }/graphql`
// const API_KEY = '1047AEE5-9BCD-4DBF-9744-A26E12B79AB6';

// const client = new ApolloClient({
//   uri: `https://cm.xmcloudcm.localhost/sitecore/api/graph/edge?sc_apikey=${API_KEY}`,
//   cache: new InMemoryCache(),
//   headers: {
//     fetchOptions: {
//       mode: 'no-cors',
//     },
//   },
// });
// export default withApollo(client);
import { ApolloClient, InMemoryCache } from '@apollo/client';
const API_KEY = '1047AEE5-9BCD-4DBF-9744-A26E12B79AB6';

const client = new ApolloClient({
  // uri: `https://cm.xmcloudcm.localhost/sitecore/api/graph/edge?sc_apikey=${API_KEY}`,
  uri: `https://xmc-4d5bao4pu1oqtch7xvzyao.sitecorecloud.io/sitecore/api/graph/edge?sc_apikey=${API_KEY}`,
  cache: new InMemoryCache(),
  headers: {
    fetchOptions: {
      mode: 'no-cors',
    },
  },
});

export default client;
