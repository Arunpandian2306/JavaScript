/*
Insertion Sort builds the sorted array one element at a time by taking an element and 
inserting it into its correct position among the already sorted elements.

Think of how you arrange playing cards in your hand:

Pick a card
Compare it with cards already arranged
Insert it into the correct position
*/
function insertionSort(arr){
    let n = arr.length
    for(let i=1;i<n;i++){
        let current = arr[i]
        let j=i-1
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=current
    }
    return arr
}
console.log(insertionSort([5,2,3,4,1]))