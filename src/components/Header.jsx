import netflixLogo from "../assets/netflixLogo.png"; 

const Header = () =>{
    return (
        <>
            <img
                className="header__logo absolute z-10 w-44 md:w-60 px-8 py-4 cursor-pointer"
                src={netflixLogo}
                alt="Netflix Logo"
            />
        </>
    );
}

export default Header;