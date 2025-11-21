import Header from "./Header";
import netflixBackground from "../assets/netflixBackground.jpg";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    updateProfile 
} from "firebase/auth";

const LoginForm = ({ isSignInForm, toggleSignInForm, email, password, handleButtonClick, fullName }) => {
	return (
		// FORM WRAPPER: Dark, Centered, and Padded
		<form className="bg-black/70 w-full max-w-md mx-auto p-12 rounded-lg shadow-lg z-10">
			<h1 className="text-white text-3xl font-bold mb-8">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

			{/* Full name */}
			{/* FULL NAME INPUT - Condition: Render ONLY if NOT Sign In */}
			{!isSignInForm && (
				<input
					type="text"
					ref={fullName}
					placeholder="Full Name"
					className="p-4 mb-6 w-full bg-black/80 rounded-md text-white border-white border-1"
				/>
			)}

			{/* EMAIL INPUT */}
			<input
				type="email"
				placeholder="Email"
				ref={email}
				
				className="p-4 mb-6 w-full bg-black/80 rounded-md text-white border-white border-1"
			/>

			{/* PASSWORD INPUT */}
			<input
				type="password"
				placeholder="Password"
				ref={password}
				
				className="p-4 mb-6 w-full bg-black/80 rounded-md text-white border-white border-1"
			/>
			{/* SIGN IN BUTTON */}
			<button
				className="p-4 my-8 bg-red-600 w-full rounded-md text-white font-bold cursor-pointer"
				onClick={handleButtonClick}
			>
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

	const email = useRef(null);
	const password = useRef(null);
	const fullName = useRef(null);

	const handleButtonClick = async(e) => {
		e.preventDefault();

		const emailValue = email.current.value;
		const passwordValue = password.current.value;
		const fullNameValue = fullName.current?.value?.trim();

		const validation = checkValidData(emailValue, passwordValue, isSignInForm ? null : fullNameValue);

		if(!validation.valid) {
			
			alert(validation.message);
			return;
		}


		if (!isSignInForm) {
			try {
            const userCred = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
            
            await updateProfile(userCred.user, {
                displayName: fullNameValue
            });

            console.log("Signed up:", userCred.user);
        } catch (error) {
            alert(error.message);
        }
		}
		else{
			try {
            const userCred = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
            console.log("Logged in:", userCred.user);
        } catch (error) {
            alert(error.message);
        }
		}
	};

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
				<LoginForm
					isSignInForm={isSignInForm}
					toggleSignInForm={toggleSignInForm}
					checkValidData={checkValidData}
					email={email}
					password={password}
					handleButtonClick={handleButtonClick}
					fullName={fullName}
				/>
			</div>
		</div>
	);
};

export default Login;
