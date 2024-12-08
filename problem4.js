//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// My thought for question is n = classmates and m = copy of the paperwork
// So for every n will multiply for m

// My first attempt
function paperwork(n, m) {
    if (n < 0 && m < 0){
      return 0
    }else if (n === m){
      return (n * m)
    }else{
      return 0
    }
  }
// Test passed but not correct
// After doing research I simplified the solution
function paperwork(n, m) {
    if (n < 0 || m < 0){
      return 0
    }else{
    return ( n * m)
      }
  }
  