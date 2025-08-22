import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function HomePage() {

    const [dataTrip, setDataTrip] = useState(null)
    const urlTrip = import.meta.env.VITE_API_TRIP

    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/trip')
            .then(response => response.json())
            .then(data => {
                console.log(data);


                setDataTrip(data)

            })
    }, [])


    return (
        <>
            {/* JUMBOTRON */}
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Travel Journal</h1>
                    <p className="col-md-8 fs-4">
                        Welcome to your personal travel journal! Record your adventures, capture memories, and share your favorite destinations. Start documenting your journeys and relive your experiences anytime, anywhere.
                    </p>
                </div>
            </div>

            <div className="container py-5" >
                <h1 className='py-2'>TRIPS</h1>
                <div className="row g-3">
                    {dataTrip?.map((element) => {

                        return (
                            <div key={element.id} className="col">
                                <Link to={`/trip/${element.id}`} className="card">
                                    <div className="card-body">
                                        <p>Viaggio in:</p>
                                        <h4 className="card-title">{element.name}</h4>
                                        <p className="card-text"> dal <b>{element.date_start}</b> al <b>{element.date_end}</b></p>
                                    </div>
                                </Link>


                            </div>
                        )
                    })}

                </div>
            </div>



        </>
    )
}