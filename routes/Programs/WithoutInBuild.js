// First Largest Number
function largest(arr) {
    let max = arr[0]
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(largest([6, 47, 2, 6, 59, 53]))