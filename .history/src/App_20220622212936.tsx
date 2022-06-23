import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { Event } from "./pages/Event"
import { Router } from "./Router"

function App() {

  return (
    <ApolloProvider client={clie}>
      <Router />
    </ApolloProvider>
  )
}

export default App
