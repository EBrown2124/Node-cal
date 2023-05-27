var rs = require('readline-sync');


var operation = false;

var sign = rs.question('What operation would you like to perform? ',{
    limit: ['+','-','*','/'],
    limitMessage: 'That is not a valid operation'
})



var num1 = rs.questionInt('Please enter the first number ',{
    limitMessage:'This is not a number'
});

var num2 = rs.questionInt('Please enter the second number ',{
    limitMessage:'This is not a number'
});



if(sign === '+'){
    var math = num1 + num2 
    console.log('The result is ' + math)

} else if (sign === '-'){
    var math = num1 - num2
    console.log('The result is ' + math)

} else if (sign === '*'){
    var math = num1 * num2
    console.log('The result is ' + math)

} else if (sign === '/'){
    var math = num1 / num2
    console.log('The result is ' + math)
}


while ( !operation) {
    if (sign === '+' || sign === '-' || sign === '*' || sign === 'x'|| sign === '/' ||sign === '%'){
        num1
        num2
        operation = true;
        break;
    }
}