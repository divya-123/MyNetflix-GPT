export const checkValidData = (email, password, name) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    let isNameValid;
    let signUpForm = false;
    if(name !== null){
        signUpForm = true
         isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name.value);
    }
    
    if(!isEmailValid) return "Invalid Email ID";
    if(!isPasswordValid) return "Invalid Password";
    if(!isNameValid && signUpForm) return "Invalid Name";

    return null;
        
}