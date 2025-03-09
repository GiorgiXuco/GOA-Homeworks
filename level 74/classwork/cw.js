// Define a method named countCharOccurrences or count_char_occurrences that accepts a string and a char as inputs and returns the number of times the char occurs in the string as an int.

function countCharOccurrences(string,s){
    let count = 0
    for(let i of string){
        if(i === s){
            count++
        }
    }
    return count
}
