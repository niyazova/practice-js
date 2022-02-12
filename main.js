var form = document.querySelector('.form');
var add = document.querySelectorAll('.add');


function addNumbers(number1, number2) {
    return number1 + number2
}
console.log(form)

form.addEventListener('submit', function(e) {
    e.preventDefault()
    var number1 = document.querySelector('.number1').value;
    var number2 = document.querySelectorAll('.number2')[0].value;
    var result = document.querySelector('#result')

    var res = addNumbers(+number1, parseFloat(number2))
    result.innerHTML = res
    console.log(res)
});

// compare numbers

var form2 = document.querySelector('.form2')
var compare = document.querySelector('.compare')

function compareNumbers(num1, num2) {
    if(num1 > num2){
        return num1
    }else {
        return num2
    }
}
console.log(form2) 

form2.addEventListener('submit', function(e) {
    e.preventDefault()
    var num1 = document.querySelector('.num1').value;
    var num2 = document.querySelectorAll('.num2')[0].value;
    var result2 = document.querySelector('.result2')

    var res2 = compareNumbers(+num1, +num2)
    result2.innerHTML = res2
    console.log(res2)

})