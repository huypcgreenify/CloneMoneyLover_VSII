//Validate Email
export const isValidEmail = (stringEmail) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(stringEmail)

//Validate Password
export const isValidPassword = (stringPassword) => stringPassword.length >= 6

//Validate InputText
export const isValInput = (stringInput) => (/^\d+$/).test(stringInput)

