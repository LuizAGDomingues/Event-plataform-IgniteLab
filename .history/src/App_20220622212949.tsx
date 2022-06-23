import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./Router"

function App() {

  return (
    <ApolloProvider client={client}>
      
    </ApolloProvider>
  )
}

export default App
