let numbers = document.querySelectorAll('.numbers');
let functions = document.querySelectorAll('.functions');
let calculation = document.getElementById('calculation');
let clear = document.getElementById('clear');
let deletes = document.getElementById('deletes');
let equals = document.getElementById('equals');

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        calculation.innerHTML += Number(numbers[i].innerHTML);
    });
}

for (let i = 0; i < functions.length; i++) {
    functions[i].addEventListener('click', function() {
        switch (functions[i].innerHTML) {
            case 'mod':
                calculation.innerHTML += '%';
                break;
            case 'x<sup>2</sup>':
                calculation.innerHTML += '<sup>2</sup>';
                break;
            default:
                console.log(functions[i].innerHTML);
                calculation.innerHTML += functions[i].innerHTML;
        }
    });
}

clear.addEventListener('click', function() {
    calculation.innerHTML = '';
});

deletes.addEventListener('click', function() {
    calculation.innerHTML = calculation.innerHTML.slice(0, calculation.innerHTML.length - 1);
});

equals.addEventListener('click', function() {
    console.log(calculation.innerHTML);
});