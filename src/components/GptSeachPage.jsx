import GptSearchBar from "./GptSearchBar.jsx";
import GptSearchResults from "./GptSearchResults.jsx";
import netflixBackground from "../assets/netflixBackground.jpg";

const GptSearchPage = () =>{
    return (
        <div className="min-h-screen text-white" style={{ backgroundImage: `url(${netflixBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <GptSearchBar />
            <GptSearchResults />
        </div>
    )
};

export default GptSearchPage;