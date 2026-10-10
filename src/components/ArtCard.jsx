import { useArtContext } from '../context/ArtContext'

function ArtCard({art}){
    const { isFavorite, addToFavorites, removeFromFavorites, addToCart } = useArtContext()
    const favorite = isFavorite(art.id)

    function onHeartClick(e){
        e.preventDefault()
        if(favorite) removeFromFavorites(art.id)
        else addToFavorites(art)
    }

    function handleAddToCart(e){
        e.preventDefault()
        addToCart(art)
    }

    return <div className="
            bg-[#3A3432] 
            rounded-2xl
            hover:scale-105 
            transition-transform duration-300 ease-in-out
            p-4 flex flex-col justify-between">
        <div className="
             relative
             aspect-auto">
            <img className="rounded-xl w-full" 
            src={art.image} alt={art.title} />
            
            <div>
            <button 
              className={`
                absolute top-4 right-4 
                text-2xl p-2 
                bg-black/50 
                rounded-full 
                w-10 h-10 md:w-10 md:h-10 
                md:text-2xl text-[1.2rem] 
                flex items-center justify-center 
                transition-colors duration-200 
                hover:bg-black/80
                ${favorite ? "text-[#ff4757]" : "text-white"}
              `} 
              onClick={onHeartClick}
            >
              ♡
            </button>
            </div>
        </div>

        <div className="
             flex 
             flex-col
             gap-3 
             pt-4">
            <h3 className="m-0 text-base">{art.title}</h3>
            <p className="text-sm text-[#999]">{art.description}</p>
            <p className="text-sm text-[#999]">{art.date}</p>
            
            <button 
                onClick={handleAddToCart}
                className="mt-2 bg-[#ffb623] text-black font-semibold py-2 rounded-xl hover:opacity-90 transition text-sm cursor-pointer"
            >
                Add to Cart
            </button>
        </div>
    </div>
}

export default ArtCard