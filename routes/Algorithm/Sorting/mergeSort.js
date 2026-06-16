// Merge Sort is a Divide and Conquer algorithm that repeatedly divides the array 
// into smaller halves,,sorts them, and then merges them back together in sorted order.

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {

    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }

    }

    return result
        .concat(left.slice(i))
        .concat(right.slice(j));
}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));