import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";


const client = new ApolloClient({
    uri: 'https://publicapi-genosis.playwithbot.com/',
    cache: new InMemoryCache()
});

export default client