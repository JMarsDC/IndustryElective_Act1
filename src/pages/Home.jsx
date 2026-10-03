import {useState} from "react"
import MediumTitle from "../components/MediumTitle"
import ArtGrid from "../components/ArtGrid"

function Home(){
    const [searchQuery, setSearchQuery] = useState("")

    const arts = [
        {id: 1, title: "Jm's Graduation", description: "Grade 6 graduation", date:"2011", medium: "Chalk", 
        image: new URL('../images/JM1.jpeg', import.meta.url).href },

        {id: 2, title: "Barkada", description: "Tunay na kaibigan", date:"2020", medium: "Water Color",
        image: new URL('../images/Barkada.jpeg', import.meta.url).href},

        {id: 3, title: "Tumbang Preso", description: "Masayang hapon", date:"2020", medium: "Water Color",
        image:new URL('../images/BatoLata.jpeg', import.meta.url).href},

        {id: 4, title: "The Lady of Shalott", description: "Woman in boat under a magic curse and drifts toward her tragic fate", date:"2017", medium: "Oil",
        image:new URL('../images/GirlInBoat.jpeg', import.meta.url).href},

        {id:5, title:"Hunting Eagle", description: "An eagle getting its lunch", date: "2020", medium: "Water Color",
        image: new URL('../images/HuntingEagle.jpeg', import.meta.url).href},

        {id:6, title:"Beautiful Wife", description: "Portrait of beauty", date: "2017", medium: "Water Color",
        image: new URL('../images/Josephine1.jpeg', import.meta.url).href},

        {id:7, title:"Pretty Lady", description: "Beautiful portrait", date: "2015", medium: "Chalk",
        image: new URL('../images/Josephine2.jpeg', import.meta.url).href},

        {id:8, title:"Happy Wife", description: "A smile worth fighting for", date: "2016", medium: "Chalk",
        image: new URL('../images/Josephine3.jpeg', import.meta.url).href},

        {id:9, title:"Handsome Son", description: "One of the Jose", date: "2017", medium: "Chalk",
        image: new URL('../images/JR1.jpeg', import.meta.url).href},

        {id:10, title:"Last Supper", description: "Last supper with Christ and his disciples", date: "2012", medium: "Oil",
        image: new URL('../images/LastSupper.jpeg', import.meta.url).href},

        {id:11, title:"Making of wine", description: "Jesus making wine for a wedding", date: "2025", medium: "Oil",
        image: new URL('../images/MakingOfWine.jpeg', import.meta.url).href},

        {id:12, title:"Oslob", description: "Cooking place during Oslob", date: "2017", medium: "Oil",
        image: new URL('../images/Oslob.jpeg', import.meta.url).href},

        {id:13, title:"Tirador", description: "Libreng mangga", date: "2021", medium: "Water Color",
        image: new URL('../images/Tirador.jpeg', import.meta.url).href},

        {id:14, title:"Tricycle", description: "Family Tricycle", date: "2021", medium: "Water Color",
        image: new URL('../images/Tricycle.jpeg', import.meta.url).href},

        {id:15, title:"Hand Of God", description: "The crucifixion of Christ", date: "2010", medium: "Oil",
        image: new URL('../images/HandOfGod.jpeg', import.meta.url).href},
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
    <MediumTitle medium="Chalk"/>
        <ArtGrid arts={arts} medium="Chalk" searchQuery={searchQuery}/>
<hr />
    <MediumTitle medium="Oil"/>
        <ArtGrid arts={arts} medium="Oil" searchQuery={searchQuery}/>

    </div>)
}

export default Home