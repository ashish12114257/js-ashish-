const coding = ["c++", "java", "python", "Rubby"]

// coding.forEach( function(val){
//     console.log(val);
    
// })

// coding.forEach( (languages) => {
//     console.log(languages);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName); 
})