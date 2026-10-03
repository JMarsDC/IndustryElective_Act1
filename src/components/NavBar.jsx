import { Link } from "react-router-dom"

function NavBar(){

    return <nav className="bg-[#C5A059] 
            flex justify-between items-center px-4 py-4
            shadow-md md:px-8">

        <div >
            <Link className="text-[1.2rem] font-bold text-white md:text-[1.5rem]" 
            to="/">Gallery</Link>
        </div>

        <div className="flex gap-4 md:gap-8">
            <Link to="/" className="rounded px-2 py-2 text-base text-[#FDFBF7] 
            transition-colors duration-200 hover:bg-white/10 md:px-4">Home </Link>

            <Link to="/Favorites" className="rounded px-2 py-2 text-base text-[#FDFBF7] 
            transition-colors duration-200 hover:bg-white/10 md:px-4">Favorite</Link>
            
            <Link to="/landingPage" className="rounded px-2 py-2 text-base text-white 
            transition-colors duration-200 hover:bg-white/10 md:px-4">Landing Page</Link>
        </div>
    </nav>
}

export default NavBar