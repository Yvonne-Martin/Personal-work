function findWords(words){
    let newWords=(words.match(/are/g).length || []).length
    return newWords
}
let words="The pupils are reading in the library"
console.log(findWords(words));
