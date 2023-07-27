//Array with prices (min-max)
export const arrPriceRanges = [
    "0-100000",
    "100000-200000",
    "200000-300000",
    "300000-400000",
    "400000-500000"
]

// The `priceRangeToIndex` function takes a `priceRange` parameter and returns the index of the corresponding price range in the `arrPriceRanges` array. 
//    - It uses the `findIndex` method on `arrPriceRanges` to search for the index of the price range that matches the provided `priceRange` parameter.
//    - The comparison is done using strict equality (`===`), which checks for an exact match of the strings.
//    - If a matching price range is found, its index is returned.
//    - If no matching price range is found, the function returns -1.
export const priceRangeToIndex = (priceRange) => {
   const index = arrPriceRanges.findIndex(priceRg => priceRg === priceRange)

   return index
}

// Utility functions to convert between price ranges and their corresponding indices in an array.