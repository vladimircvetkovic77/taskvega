export const sumObjectProperty = (obj, property) => {
    return obj.reduce((accum, current) => {
        return accum + parseInt(current[property]);
    }, 0);
}