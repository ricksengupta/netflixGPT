
export const checkValidData = (email, password, fullName) => {

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]|:;'<>,.?/~-]).{8,}$/.test(password);
    const isFullNameValid = /^[A-Za-z ]{2,}$/.test(fullName);

    if(!isEmailValid) {
        return { valid: false, message: "Invalid email format." };
    }
    if(!isPasswordValid) {
        return { valid: false, message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character." };
    }
    if (!isFullNameValid) {
        return { valid: false, message: "Full name must contain only letters and spaces, at least 2 characters." };
    }
    return { valid: true };
};