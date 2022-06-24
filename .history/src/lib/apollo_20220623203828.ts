import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4ng6f3x034s01z0acqygblx/master",
    headers: {
        'Authorization': 'Bearer '
    }
    cache: new InMemoryCache(),
})