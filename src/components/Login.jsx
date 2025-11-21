import Header from "./Header";
import netflixBackground from "../assets/netflixBackground.jpg";
import { useState } from "react";

const LoginForm = ({ isSignInForm, toggleSignInForm }) => {
	return (
		// FORM WRAPPER: Dark, Centered, and Padded
		<form className="bg-black/70 w-full max-w-md mx-auto p-12 rounded-lg shadow-lg z-10">
			<h1 className="text-white text-3xl font-bold mb-8">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

			{/* Full name */}
			{/* FULL NAME INPUT - Condition: Render ONLY if NOT Sign In */}
			{!isSignInForm && (
				<input
					type="text"
					placeholder="Full Name"
					// 👇 Added consistent bottom margin: mb-6
					className="p-4 mb-6 w-full bg-black/80 rounded-md text-white border-white border-1"
				/>
			)}

			{/* EMAIL INPUT */}
			<input
				type="email"
				placeholder="Email"
				// 👇 Changed my-4 to consistent bottom margin: mb-6
				className="p-4 mb-6 w-full bg-black/80 rounded-md text-white border-white border-1"
			/>

			{/* PASSWORD INPUT */}
			<input
				type="password"
				placeholder="Password"
				// 👇 Changed my-4 to consistent bottom margin: mb-6 (or mb-0 if the next element is the button)
				className="p-4 mb-6 w-full bg-black/80 rounded-md text-white border-white border-1"
			/>
			{/* SIGN IN BUTTON */}
			<button className="p-4 my-8 bg-red-600 w-full rounded-md text-white font-bold cursor-pointer">
				{isSignInForm ? "Sign In" : "Sign Up"}
			</button>

			{/* Remember Me / Need Help Link */}
			<div className="flex justify-between text-sm text-gray-500">
				<label className="flex items-center">
					<input
						type="checkbox"
						className="form-checkbox text-gray-400 bg-gray-500 border-gray-400 rounded mr-2"
					/>
					Remember me
				</label>
				<a href="#" className="hover:underline">
					Need help?
				</a>
			</div>

			{/* Sign Up Text */}
			<p className="mt-16 text-gray-500">
				New to Netflix?
				<span className="text-white hover:underline ml-1 cursor" onClick={toggleSignInForm}>
					{isSignInForm ? "Sign Up now" : "Sign In"}
				</span>
			</p>
		</form>
	);
};

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div className="relative min-h-screen">
			<div
				className="absolute inset-0 bg-cover bg-center -z-10"
				style={{ backgroundImage: `url(${netflixBackground})` }}
			>
				<div className="absolute inset-0 bg-black opacity-50"></div>
			</div>

			<Header />

			<div className="flex justify-center items-center min-h-screen pt-24 md:pt-0">
				<LoginForm isSignInForm={isSignInForm} toggleSignInForm={toggleSignInForm} />
			</div>
		</div>
	);
};

export default Login;
