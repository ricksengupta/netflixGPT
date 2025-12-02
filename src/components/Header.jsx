import netflixLogo from "../assets/netflixLogo.png";
import userIcon from "../assets/userIcon.jpg";
import { auth } from "../utils/firebase.js";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice.js";
import { toggleGptSearchView } from "../store/gptSlice.js";
import { SupportedLanguages } from "../utils/languageConstants.js";
import { changeLanguage } from "../store/configSlice.js";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
				const { uid, email, displayName } = user;

				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
					})
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}

			return () => unsubscribe();
		});
	}, []);

	const handleGptSearchClick = () => {
		dispatch(toggleGptSearchView());
	};

	const handleLanguageChange = (event) => {
		const selectedLanguage = event.target.value;
		dispatch(changeLanguage(selectedLanguage));
	};

	return (
		<div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-16 py-3 bg-gradient-to-b from-black/80 to-transparent w-full z-20">
			<img className="w-24 md:w-32 lg:w-40 cursor-pointer" src={netflixLogo} alt="Netflix Logo" />

			{auth.currentUser && (
				<div className="flex items-center gap-10">
					<button
						onClick={handleGptSearchClick}
						className="py-2 px-4 m-2 bg-red-600 text-white rounded cursor-pointer"
					>
						{showGptSearch ? "Home" : "GPT Search"}
					</button>
					{showGptSearch && (
						<select
							className="bg-black text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-md"
							onChange={handleLanguageChange}
						>
							{SupportedLanguages.map((lang) => (
								<option key={lang.identifier} value={lang.identifier} className="bg-black text-white">
									{lang.name}
								</option>
							))}
						</select>
					)}
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
