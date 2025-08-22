import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="d-flex">
                <Link className="navbar-brand" to={'/'}>
                    <img className="w-50 " src="./logo.png" alt="" />
                </Link>


                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>

                </ul>

            </div>
        </nav>
    )
}