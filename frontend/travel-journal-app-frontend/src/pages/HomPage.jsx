export default function HomePage() {
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
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>


                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>


                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



        </>
    )
}