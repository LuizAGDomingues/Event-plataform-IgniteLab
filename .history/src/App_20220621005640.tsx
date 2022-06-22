import { gql, useQuery } from "@apollo/client"


const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
function App() {
  const { data } = useQuery(GET_LESSONS_QUERY)
  console.log(data)

  interface Lesson {
    id: string
    title: string
  }

  return (
    <ul>
      {data.lessons.map( => {
        return <li key={lesson.id}>{lesson.title}
      })}
    </ul>
  )
}

export default App
