export default function generateId() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length))
    
    return randomLetter + crypto.randomUUID().substring(1);
}