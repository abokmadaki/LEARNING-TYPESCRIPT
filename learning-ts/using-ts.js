var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
// adding an exclamation'!' at the end of your get variable tells typeScript that you are sure of getting an element with that id, tag or class.
// 'as HTMLInputElement' is a type casting syntax to let typescript know which type of element it would be. 
