import ArtCard from "../components/ArtCard"
import {useState} from "react"
import '../css/Home.css'

function Home(){
    const [searchQuery, setSearchQuery] = useState("")

    const arts = [
        {id: 1, title: "Jm's Graduation", description: "Graduated at [this] skool", date:"2018", medium: "Color Pencil"},
        {id: 2, title: "Epn 1", description: "bootiful art", date:"2014", medium: "Water Color"},
        {id: 3, title: "Last Supper", description: "Last supper", date:"2012", medium: "Color Pencil"},
        {id: 4, title: "Hand of God", description: "Jesus's Crucifixion", date:"2010", medium: "Water Color"},
        {id:5, title:"The Making of the red wine", description: "Jesus at the feast preparing for a wine", date: "10/02/2026", medium: "Color Pencil"}
    ]

const handleSearch = (e) =>{
    e.preventDefault()
    alert(searchQuery)
}

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search.." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            
        </form>

    <h2>Water Color</h2>
        <div className="arts-grid">
            {arts.filter((art) => (art.medium) === "Water Color").map((art) => 
            (art.title.toLowerCase().startsWith(searchQuery)) &&
            (<ArtCard art={art} key={art.id}/>)
            )}
        </div>
<hr></hr>
    <h2>Oil</h2>
        <div className="arts-grid">
            {arts.map((art) => (art.title.toLowerCase().startsWith(searchQuery)) &&
                (<ArtCard art={art} key={art.id}/>
                )
            )}
        </div>
    </div>)
}

export default Home