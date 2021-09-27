import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider, ApolloClient, InMemoryCache, HttpLink, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {theme} from './MaterialUi/theme'

import { ThemeProvider } from '@material-ui/styles';

const errorLink = onError(({graphqlErrors, networkError}) => {
    if(graphqlErrors){
      graphqlErrors.map(({message, location, path})=>{
       return alert(`graphql error ${message}`);
       
      })
  }
})

const link = from([
    errorLink,
    new HttpLink({uri: "https://backend-clone-afcmp43s3a-nw.a.run.app/graphql"}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
