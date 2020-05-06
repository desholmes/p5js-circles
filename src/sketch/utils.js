export const randomFloatBetween = (min, max) => {
    return Math.random() * (max - min) + min;
}

export const randomIntBetween = (min, max) => {
    return Math.round(randomFloatBetween(max, min));
}