var arrowFun = () => {
    console.log('this in Arrow functon: ');
    console.log(this);
    console.log('this === window');
}

function normalFun() {
    console.log('this in normal functon: ');
    console.log(this);
    console.log('this means the global scope where it runs');
}
arrowFun()
normalFun()