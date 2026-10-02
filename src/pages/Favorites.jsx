import '../css/Favorites.css'
import { useArtContext } from '../context/ArtContext'
import ArtCard from '../components/ArtCard'

function Favorites(){
    const{favorites} = useArtContext()

    if(favorites){
        return <div className="favorites">
            <h3>Your Favorites</h3>
            <div className="arts-grid">
                {favorites.map((art) => 
                (<ArtCard art={art} key={art.id}/>)
                )}
            </div>
        </div>
    }

    return <div className="favorites-empty">
        <h3>No Favorites Yet</h3>
        <p>Add favorites this will display here</p>
    </div>

}

export default Favorites