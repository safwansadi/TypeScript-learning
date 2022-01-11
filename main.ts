function logger (message){
    console.log(message);
}

let messageToShow = 'Hello World'
logger(messageToShow);

function doSomething(){
    for(let i=0 ; i<5; i++){
        console.log(i)
    }
    console.log('Finally: ' +i);
}
doSomething();

enum color {Red = 0, Green = 1, Blue = 2, Purple = 3 };
let backgroundColor = color.Red;

console.log(backgroundColor);

//type assertion 
let message; 
message = 'abc';
let endsWith = (<string>message).endsWith('c');
let altWay = (message as string).endsWith('c');
