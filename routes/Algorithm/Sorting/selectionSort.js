// Selection Sort is a sorting algorithm that repeatedly finds the smallest element 
// from the unsorted part of the array and places it at the beginning

function selectionSort(arr){
    let n = arr.length
    for(let i=0;i<n-1; i++){ // 
        let min = i
        for(let j=i+1;j<n;j++){
            if(arr[min]>arr[j]){
                min = j
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}
console.log(selectionSort([56,4,23,67,34,60,54]))