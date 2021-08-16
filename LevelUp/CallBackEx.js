function greetUser(userName, greet, CallBack) {
    CallBack(userName, greet)
}

function handleGreetFun(userName, greet) {
    console.log(`Hello, ${userName} good ${greet}`);
}

greetUser('ullas', 'morning', handleGreetFun);
greetUser('ullas', 'evening', handleGreetFun);