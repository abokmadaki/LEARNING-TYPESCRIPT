let log = function(message : string) {
    console.log(message);
}

let doLog = (message : string) => {
    console.log(message);
}

let drawPoint = (point: {x: number, y: number}) => {
    console.log(point);
}

drawPoint({
    x: 1,
    y: 2
});

doLog('user');
log('weser');