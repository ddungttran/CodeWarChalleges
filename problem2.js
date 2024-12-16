//Implement a function which convert the given boolean value into its string representation.

//My first thought for this problem was to create a if/else statement 
//If b equal true return true as a string
//else return false as a string

function booleanToString(b){
    //your code here
    if (b === true){
      return "true"
    } else {
      return "false"
    }
}

//After submit my solution and they gave me other answers to this problem I found this answer pretty interesting
function booleanToString(b){
    return b.toString();
  }
  


