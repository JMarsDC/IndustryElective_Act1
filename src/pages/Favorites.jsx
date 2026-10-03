import { useArtContext } from '../context/ArtContext'
import ArtCard from '../components/ArtCard'

function Favorites(){
    const{favorites} = useArtContext()

    if(favorites){
        return <div className="
                    p-8
                    w-full 
                    box-border
                    ">
            <h3 className="
                p-12
                text-5xl
                text-center
                "
            >Your Favorites</h3>
            <div className="
            grid 
            grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 
            gap-6 
            p-4 
            w-full 
            box-border">
                {favorites.map((art) => 
                (<ArtCard art={art} key={art.id}/>)
                )}
            </div>
        </div>
    }

    return <div className="flex items-center">
        <h3>No Favorites Yet</h3>
        <p>Add favorites this will display here</p>
    </div>

}

export default Favorites