// Bubble sort repeatedly compares adjacent elements and swaps them if they are in the wrong order.

function bubblesort(arr){
    let n = arr.length
    for (let i = 0; i<=n; i++){
        for (let j = 0 ; j<= n-i; j++){
            if(arr[j]> arr[j+1]){
                let temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1]= temp
            }
        }
        
    }
    return arr
}
console.log(bubblesort([4,1,5,2,6,9,7]))