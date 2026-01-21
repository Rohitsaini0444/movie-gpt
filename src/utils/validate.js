 const validate = (fullName, email, password) => {
    const fullNameRegex = /^[a-zA-Z\s]{2,}$/;
    if (fullName !== null && !fullNameRegex.test(fullName)) {
        return 'Full Name must contain only letters and spaces, and be at least 2 characters long';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Invalid email format';
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number
    if (!passwordRegex.test(password)) {
        return 'Password must be at least 8 characters long and contain both letters and numbers';
    }
    return null;
}
export default validate;