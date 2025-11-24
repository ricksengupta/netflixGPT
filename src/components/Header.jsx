import netflixLogo from "../assets/netflixLogo.png";
import userIcon from "../assets/userIcon.jpg";
import { auth } from "../utils/firebase.js";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../store/userSlice.js";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {

                navigate("/error");
				// An error happened.
			});
	};

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName} = user;

    dispatch(addUser({
        uid : uid,
        email : email,
        displayName : displayName,
    }));
    navigate("/browse");
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user    // ...
  } else {

    dispatch(removeUser());
    navigate("/");
    // User is signed out
    // ...
  }

  return () =>unsubscribe()

  

});
        
    }, []);

	return (
		<div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-16 py-3 bg-gradient-to-b from-black/80 to-transparent w-full z-20">
			<img className="w-24 md:w-32 lg:w-40 cursor-pointer" src={netflixLogo} alt="Netflix Logo" />

              {auth.currentUser &&(
                <div className="flex items-center gap-10">
				<img
					src={userIcon}
					alt="User Icon"
					className="w-8 h-8 md:w-10 md:h-10 rounded-md cursor-pointer object-cover"
				/>

				<button
					onClick={handleSignOut}
					className="text-white bg-red-600 px-4 py-2 text-sm rounded-lg font-semibold shadow-lg hover:bg-red-700 hover:shadow-xl transition duration-300 hidden md:block"
				>
					Sign Out
				</button>
			</div>
              )}                  

			
		</div>
	);
};

export default Header;
