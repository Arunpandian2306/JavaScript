// First Largest Number
function largest(arr) {
    return Math.max(...arr)

}
console.log(largest([5, 4, 2, 5, 1, 27, 8]))

function large(arr) {
    return arr.reduce((max, curr) =>
        curr > max ? curr : max
    )
}
console.log(large([5, 4, 2, 5, 1, 27, 8]))

function largeSort(arr) {
    arr.sort((a, b) => b - a)
    return arr[0]
}
console.log(largeSort([5, 4, 2, 5, 1, 27, 8]))

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------