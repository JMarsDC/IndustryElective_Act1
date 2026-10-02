import {createContext, useState, useContext, useEffect} from "react"

const ArtContext = createContext()

export const useArtContext = () => useContext(ArtContext)

export const ArtProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (art) => {
        setFavorites(prev => [...prev, art])
    }

    const removeFromFavorites = (artId) => {
        setFavorites(prev => prev.filter(art => art.id !== artId))
    }
    
    const isFavorite = (artId) => {
        return favorites.some(art => art.id === artId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <ArtContext.Provider value={value}>
        {children}
    </ArtContext.Provider>
}