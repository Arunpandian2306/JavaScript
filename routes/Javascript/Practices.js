const str = "Arunpandian"
const rev= str.split("").reverse().join("")
console.log(rev)


const str1 ="Pandian"
let rev1=""
for(let i=str1.length-1;i>=0;i--){
    rev1= rev1+str1[i]
}
console.log(rev1)
function revs(words){
    const final = words.map((word)=> word.split("").reverse().join(""))
    return final
}
console.log(revs(["Arun","Pandian"]))