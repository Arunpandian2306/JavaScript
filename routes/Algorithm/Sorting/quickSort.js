/* 
Quick Sort Definition

Quick Sort is a Divide and Conquer algorithm that selects a pivot element and partitions the array so that:

Elements smaller than the pivot go to the left.
Elements greater than the pivot go to the right.

Then it recursively sorts the left and right parts. 
*/

function quickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }

    }

    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ];
}

console.log(quickSort([8, 3, 5, 4, 7, 6, 1, 2]));