export function getRandomIntNumber(max, min = 0) {
    return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}