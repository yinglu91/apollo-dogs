import React, { useState } from 'react';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import './App.css';

import Dogs from './components/Dogs';
import DogPhoto from './components/DogPhoto';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://32ypr38l61.sse.codesandbox.io/',
  }),
});

const App = () => {
  const [selectedDog, setSelectedDog] = useState(null);

  const onDogSelected = ({ target }) => {
    setSelectedDog(target.value);
  };

  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <h2>My nth Apollo app 🚀</h2>
        <Dogs onDogSelected={onDogSelected} />
        <br /> <br />
        <DogPhoto breed={selectedDog} />
      </div>
    </ApolloProvider>
  );
};

export default App;

// https://www.apollographql.com/docs/react/v3.0-beta/data/queries/#executing-a-query
// playground:
// https://32ypr38l61.sse.codesandbox.io/
//
//  import { useQuery, gql } from '@apollo/client';
// client
//   .query({
//     query: gql`
//       query GetRates {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `,
//   })
//   .then((result) => console.log('yyyy', result));
