//Array with all the areas//
export const arrContinent = [
    'milano',
    'lucca',
    'firenze',
    'roma',
    'napoli',
    'torino'
]
// The `continentToIdx` function  takes a `continent(area)` parameter and returns the index of the corresponding area in the `arrContinent` array. The function performs the following steps:
//    - It checks if the `continent(area)` parameter is truthy (not null, undefined, or empty).
//    - If the `continent` is truthy, it uses the `findIndex` method on `arrContinent` to search for the index of the matching continent(area). The comparison is case-insensitive by converting both the `continent(area)` and the array element to lowercase before comparison.
//    - If a matching continent(area) is found, its index is returned.
//    - If no matching continent(area) is found, the function returns -1. This serves as a default value or indicates that the continent is not found in the array.
export const continentToIdx = (continent) => {
    if (continent) {
      return arrContinent.findIndex((cont) => cont.toLowerCase() === continent.toLowerCase());
    }
    return -1; // Return a default value or handle the case when continent is undefined
  };
  

  // The `idxToContinent` function takes an `idx` parameter (an index) and returns the continent(area)'s name corresponding to that index in the `arrContinent` array. The function performs the following steps:
  // - It uses the `filter` method on `arrContinent` to filter the elements based on their index.
  // - The filter callback takes two parameters: `_` (the current element, which is not used) and `index`.
  // - It compares the `index` with the `idx` parameter, converting both to numbers using `Number()`.
  // - If the index matches the provided `idx`, that element is returned.
  // - Since `filter` returns an array, `[0]` is appended at the end to access the first (and only) element in the filtered array.
export const idxToContinent = (idx) => {
    return (arrContinent.filter((_, index) => index === Number(idx)))[0]
}

// Used to convert between areas names and their corresponding indices in the `arrContinent` array. `continentToIdx`  used to find the index of an area, and `idxToContinent` can be used to find the area's name for a given index.