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

});


   // calculate

var form3 = document.querySelector('.form3')
var calculate = document.querySelector('.calculate')

// var plus = document.querySelector('.plus')
// var minus = document.querySelector('.minus')
// var device = document.querySelector('.device')
// var multiply = document.querySelector('.multiply')


function minusNumbers(numb1, numb2) {
    if(numb1, numb2) {
        return numb1 - numb2
    }
}

function deviceNumbers(numb1, numb2) {
    if(numb1, numb2) {
        return numb1 / numb2
    }
}
function multiplyNumbers(numb1, numb2) {
    if(numb1, numb2) {
        return numb1 * numb1 
    }
}

form3.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var options = document.querySelector('#options').value
    var numb1 = +document.querySelector('.numb1').value;
    var numb2 = +document.querySelector('.numb2').value;
    var result3 = document.querySelector('.result3');



    if(options == 'plus') {
        result3.innerHTML = addNumbers(numb1, numb2)
    }
    else if(options == 'minus') {
        result3.innerHTML = minusNumbers(numb1, numb2)
    }
    else if(options == 'device') {
        result3.innerHTML = deviceNumbers(numb1, numb2)
    }
    else {
        result3.innerHTML = multiplyNumbers(numb1, numb2)
    }

    console.log(options, numb2, numb1, result3)

})