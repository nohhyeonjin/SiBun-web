import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloLink, split, Observable } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

const httpLink = new HttpLink({
  uri: 'http://18.225.35.109:8080', //59.151.215.3:4000 //192.168.220.59:4000 //18.225.35.109:8080
  //uri: 'http://127.0.0.1:4000',
  credentials: 'same-origin'
});

const wsLink = new WebSocketLink({
  uri: `ws://18.225.35.109:8080`,
  //uri: 'ws://127.0.0.1:4000',
  options: {
    reconnect: true
  }
});

 const request = async (operation) => {
  const token =  localStorage.getItem('TOKEN'); //localStorageë¥? ì°¾ì•„?„œ ?ˆ˜? •?•´?•¼ ?Œ
  operation.setContext({
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
 };


const requestLink = new ApolloLink((operation, forward) =>
  new Observable(observer => {
    let handle;
    Promise.resolve(operation)
      .then(oper => request(oper))
      .then(() => {
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })
      .catch(observer.error.bind(observer));

    return () => {
      if (handle) handle.unsubscribe();
    };
  })
);

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    requestLink,
    split(
      // split based on operation type
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      httpLink,
    )
  ]),
  cache: new InMemoryCache()
});

export default apolloClient;