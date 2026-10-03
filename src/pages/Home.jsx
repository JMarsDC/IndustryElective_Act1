import {useState} from "react"
import MediumTitle from "../components/MediumTitle"
import ArtGrid from "../components/ArtGrid"

function Home(){
    const [searchQuery, setSearchQuery] = useState("")

    const arts = [
        {id: 1, title: "Jm's Graduation", description: "Graduated at [this] skool", date:"2018", medium: "Color Pencil", 
        image: new URL('../images/Objective 3 Module 1.png', import.meta.url).href },
        {id: 2, title: "Epn 1", description: "bootiful art", date:"2014", medium: "Water Color",
        image: new URL('../images/IM2_ERD to DDL4.jpeg', import.meta.url).href},
        {id: 3, title: "Last Supper", description: "Last supper", date:"2012", medium: "Color Pencil"},
        {id: 4, title: "Hand of God", description: "Jesus's Crucifixion", date:"2010", medium: "Water Color"},
        {id:5, title:"The Making of the red wine", description: "Jesus at the feast preparing for a wine", date: "10/02/2026", medium: "Color Pencil"}
    ]

const handleSearch = (e) =>{
    e.preventDefault()
    alert(searchQuery)
}

    return (
    <div className="
         py-8
         w-full 
         box-border
         ">
    <h1 className="text-3xl font-serif text-[#ffb623] md:text-6xl text-center">
      House Art Gallery
    </h1>

        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search.." 
            className="
                flex-1
                center
                px-6
                py-4
                border-none 
                rounded-2xl 
                bg-[#333] 
                text-white
                text-2xl 
                m-3
                "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
        </form>
<hr />
    <MediumTitle medium="Water Color"/>
        <ArtGrid arts={arts} medium="Water Color" searchQuery={searchQuery}/>
<hr />
    <MediumTitle medium="Color Pencil"/>
        <ArtGrid arts={arts} medium="Color Pencil" searchQuery={searchQuery}/>
    
    </div>)
}

export default Home