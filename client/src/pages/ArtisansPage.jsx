import { useEffect } from "react"
import { useArtisans } from "../context/ArtisansContext"
import ArtisanCard from "../components/ArtisanCard";

function ArtisansPage(){

    const {getArtisans, artisans} = useArtisans();

    useEffect(()=>{
        getArtisans()
    },[]);

    return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        
        {artisans.map((artisan) => (
            <ArtisanCard artisan={artisan} key={artisan._id} />
            ))
        }

    </div>
    );
}

export default ArtisansPage