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

