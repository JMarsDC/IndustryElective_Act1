import '../css/MovieCard.css'
import { useArtContext } from '../context/ArtContext'

function ArtCard({art}){
    const{isFavorite, addToFavorites,removeFromFavorites} = useArtContext()
    const favorite = isFavorite(art.id)

    function onHeartClick(e){
        e.preventDefault()
        if(favorite) removeFromFavorites(art.id)
        else addToFavorites(art)
    }

    return <div className="art-card">
        <div className="art">
            <img src={art.image} alt={art.title} />
            <div className="art-overlay">
                <button className={`heart-btn ${favorite ? "active": ""}`} onClick={onHeartClick}>
                    ♡
                </button>
            </div>
        </div>
        <div className="art-info">
            <h3>{art.title}</h3>
            <p>{art.description}</p>
            <p>{art.date}</p>
        </div>
    </div>
}

export default ArtCard