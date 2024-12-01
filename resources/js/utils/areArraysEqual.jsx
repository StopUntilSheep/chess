const areArraysEqual = (arr1, arr2) => {
    // If lengths are different, arrays are not equal
    if (arr1.length !== arr2.length) return false;

    // Compare each element in order
    return arr1.every((value, index) => value === arr2[index]);
};

export default areArraysEqual;
