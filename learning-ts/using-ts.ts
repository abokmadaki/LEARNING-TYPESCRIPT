const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number , num2: number) {
    return num1 + num2
}

button.addEventListener('click', function() {
    console.log(add(+input1.value, +input2.value));
});

// adding an exclamation'!' at the end of your get variable tells typeScript that you are sure of getting an element with that id, tag or class.

// 'as HTMLInputElement' is a type casting syntax to let typescript know which type of element it would be. 