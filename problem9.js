//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//a can contain numbers or strings. x can be either.
//Return true if the array contains the value, false if not.

//My first thought was to use find to see if it is contains int the array
//The answer wasnt correct so I looked up the right method that I need to use is includes()

function check(a, x) {
    if (a.includes(x)) {
    return true
    }
    return false
}