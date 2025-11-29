const VideoTitle = ({ title, overview }) => {
	return (
		<div className="absolute w-screen aspect-video pt-[18%] md:pt-[15%] px-8 md:px-16 text-white bg-gradient-to-r from-black/50 to-transparent cursor-default select-none">
			<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg">{title}</h1>

			<p className="hidden md:inline-block text-lg md:w-1/2 lg:w-1/3 mb-6 leading-relaxed drop-shadow-md">
				{overview}
			</p>

			<div className="flex space-x-3 md:space-x-4 mt-4 md:mt-6">
				<button className="bg-white/90 text-black py-2 md:py-3 px-8 md:px-12 rounded-lg text-xl font-bold hover:bg-white transition duration-300 flex items-center shadow-xl hover:cursor-pointer">
					<svg className="w-6 h-6 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M6 3.5l14 8.5-14 8.5z" />
					</svg>
					Play
				</button>

				<button className="bg-gray-500/50 text-white py-2 md:py-3 px-8 md:px-12 rounded-lg text-lg font-bold hover:bg-gray-500/40 transition duration-300 flex items-center shadow-xl hover:cursor-pointer">
					More Info
				</button>
			</div>
		</div>
	);
};
export default VideoTitle;
