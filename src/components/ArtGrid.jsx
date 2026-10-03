import ArtCard from "./ArtCard";

function ArtGrid({arts, medium, searchQuery}){
const filteredArts = arts.filter((art) => {
    const matchesMedium = medium ? art.medium === medium : true;
    const matchesSearch = art.title.toLowerCase().startsWith(searchQuery.toLowerCase());
    return matchesMedium && matchesSearch;
  });

  return(
    <div className="
          grid 
          grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 
          gap-6 
          p-4 
          w-full 
          box-border
        ">
        {filteredArts.map((art)=>(
            <ArtCard art={art} key={art.id}/>
        ))}
    </div>
  )
};

export default ArtGrid;