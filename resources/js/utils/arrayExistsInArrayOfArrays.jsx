const arrayExistsInArrayOfArrays = (targetArray, arrayOfArrays) =>
    arrayOfArrays.some(
        (array) => JSON.stringify(array) === JSON.stringify(targetArray)
    );

export default arrayExistsInArrayOfArrays;
