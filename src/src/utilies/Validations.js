import {
    auth,
} from '../firebase/firebase'

//Validate Email
export const isValidEmail = (stringEmail) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(stringEmail)

//Validate Password
export const isValidPassword = (stringPassword) => stringPassword.length >= 6

//Validate InputText
export const isValInput = (stringInput) => (/^\d+$/).test(stringInput)

//Subtring email
export const subEmailName = () => {
    let indexEmail = (auth.currentUser.email).indexOf('@')
    return (auth.currentUser.email).substring(0, indexEmail).toUpperCase()
}

