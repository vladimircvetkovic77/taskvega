
export const randomItem = (arr) => {
    const randomNumber = Math.floor(Math.random() * (arr.length - 1));
    return arr[randomNumber];
} 