import { gql } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
query MyQuery {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}
`

export function Sidebar() {
    

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                <Lesson 
                    title="Aula 01"
                    slug="aula-01"
                    availableAt={new Date()}
                    type='class'
                />
            </div>
        </aside>
    )
}