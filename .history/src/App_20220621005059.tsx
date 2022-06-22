import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS

function App() {
  useEffect(() => {
    client.query()
  }, [])

  return (
    <h1>Hello World</h1>
  )
}

export default App
