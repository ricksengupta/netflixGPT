import { useSelector } from "react-redux";
import lang from "../utils/languageConstants.js";

const GptSearchBar = () => {

	const langKey = useSelector((store) => store.config.lang);

	return (
		<div className="pt-[15%] flex justify-center z-10 ">
			<form className="w-11/12 md:w-3/4 lg:w-1/2 bg-black p-2 md:p-3 rounded-xl grid grid-cols-12 shadow-2xl backdrop-blur-sm">
				<input
					type="text"
					className="col-span-9 p-3 md:p-4 text-lg bg-white rounded-l-xl focus:outline-none focus:ring-2 focus:ring-red-600 shadow-inner text-gray-800 me-2"
					placeholder={lang[langKey].gptSearch}
				/>
				<button className="col-span-3 py-3 md:py-4 bg-red-600 text-white font-bold text-lg rounded-r-xl hover:bg-red-700 transition duration-200 shadow-lg ml-1">
					{lang[langKey].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
