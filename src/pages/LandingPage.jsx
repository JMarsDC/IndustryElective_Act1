import { Link } from "react-router-dom"

function LandingPage(){
    return <div>
        <div className="landing-page-button">
            <Link to="/" className="landing-link"> Explore </Link>
        </div>
    </div>
}

export default LandingPage