//Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

//My first thought for this question was using the for loop
//This is my first attempt
function drawStairs(n) {
    for (let i = 1; i <= n; i++) {
        console.log("I")
    }
  }
//It printed out I but without padding 
//After research for more steps I came up with this 
function drawStairs(n) {
    for (let i = 0; i < n; i++) {
        console.log(' '.repeat(i) + 'I');
    }
}
//The result came out stairs but not what they wanted
//After research for some more I got this solution

function drawStairs(n) {
    let result = ' '
    for (let i = 0; i < n; i++) {
      result += ' '.repeat(i) + 'I\n';
    }
    return result.trim()
}