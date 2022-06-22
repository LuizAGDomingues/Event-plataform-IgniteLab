import { useEffect } from "react"
import { client } from "./lib/apollo"


function App() {
  useEffect(() => {
    <client className="query"></client>
  })

  return (
    <h1>Hello World</h1>
  )
}

export default App
