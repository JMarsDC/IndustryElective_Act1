import '../css/MovieCard.css'

function ArtCard({art}){

    function onHeartClick(){
        alert("clicked")
    }

    return <div className="art-card">
        <div className="art">
            <img src={art.image} alt={art.title} />
            <div className="art-overlay">
                <button className="heart-btn" onClick={onHeartClick}>
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