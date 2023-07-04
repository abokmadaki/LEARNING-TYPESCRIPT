"use strict";
// Unknown types
let userInput;
// unknown is preferable to any
// Relearn JavaScript try catch
let userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
// Never type for function
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while true () {}
}
generateError('An error occured', 500);
