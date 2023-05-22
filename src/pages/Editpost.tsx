import { useParams } from "react-router-dom"

export function Editpost() {
    const {id} =useParams()

    return (
        <div>Edit post {id}</div>
    )
}