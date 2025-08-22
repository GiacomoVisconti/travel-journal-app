import { useParams } from "react-router-dom"

export default function SingleTrip() {
    const { id } = useParams()

    return (
        <h1>ciao {id} </h1>
    )
}