import {createContext, useState, useContext, useEffect} from "react"

const ArtContext = createContext()

export const useArtContext = () => useContext(ArtContext)

export const ArtProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    const [user, setUser] = useState(null) // { username, email }
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) setFavorites(JSON.parse(storedFavs))

        const storedUser = localStorage.getItem("user")
        if (storedUser) setUser(JSON.parse(storedUser))

        const storedCart = localStorage.getItem("cart")
        if (storedCart) setCart(JSON.parse(storedCart))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            localStorage.removeItem('user')
        }
    }, [user])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    // Favorites actions
    const addToFavorites = (art) => {
        setFavorites(prev => [...prev, art])
    }

    const removeFromFavorites = (artId) => {
        setFavorites(prev => prev.filter(art => art.id !== artId))
    }
    
    const isFavorite = (artId) => {
        return favorites.some(art => art.id === artId)
    }

    // User authentication actions
    const login = (username, email) => {
        setUser({ username, email })
    }

    const logout = () => {
        setUser(null)
        setCart([])
        localStorage.removeItem('cart')
    }

    // Cart actions
    const addToCart = (art) => {
        if (!user) {
            alert("Please log in or create an account first to add items to your cart!")
            return
        }
        if (cart.some(item => item.id === art.id)) {
            alert("This art piece is already in your cart.")
            return
        }
        setCart(prev => [...prev, art])
        alert(`Added "${art.title}" to your cart!`)
    }

    const removeFromCart = (artId) => {
        setCart(prev => prev.filter(art => art.id !== artId))
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        user,
        login,
        logout,
        cart,
        addToCart,
        removeFromCart
    }

    return <ArtContext.Provider value={value}>
        {children}
    </ArtContext.Provider>
}