import {
    auth,
} from '../firebase/firebase'

//Validate Email
export const isValidEmail = (stringEmail) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(stringEmail)

//Validate Password
export const isValidPassword = (stringPassword) => stringPassword.length >= 6

//Validate InputText
export const isValInput = (stringInput) => /^[0-9,]*$/.test(stringInput)

//Subtring email
export const subEmailName = () => {
    let indexEmail = (auth.currentUser.email).indexOf('@')
    return (auth.currentUser.email).substring(0, indexEmail).toUpperCase()
}

//IdRandom
export const guidGenerator = () => {
    const S4 = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
//Validate money
export const isValFormatMoney = (inputMoney) => inputMoney.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

//formatMoneyInput
export const formatMoneyInput = inputMoney => {
    let num = inputMoney.replace(/,/gi, '')
    let num2 = num.replace(/\d(?=(?:\d{3})+$)/g, '$&,')
    return num2
}


