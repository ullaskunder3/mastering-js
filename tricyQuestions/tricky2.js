function thisKeyWordExample() {
    const person = {
        name: 'Rexa',
        sayMyName: function () {
            console.log('Say my name: ', this.name);
        }
    }
    person.sayMyName()
    //this calling the function => output: this.name === Rexa

    const localSayMyName = person.sayMyName;
    // we have localSayMyName and assigned person.sayMyName function to it [*not calling]
    localSayMyName();
    // later we call the *local version of that function
    // => which output: undefined

    /**Analysis
     * When we call the localSayName() its actually the local version or reference call
     * where the `this.name` is no longer to => person scope
     * but it will the global context where global.name => which is undefined
     * 
     * this looks at the call site => who is the one calling the function
     */
}
thisKeyWordExample()

console.log('\n*************using arrow function**************\n');

function thisUsingArrowFunc() {
    
    const person = {
        name: 'Rexa',
        sayMyName: () => {
            console.log('Say my name: ', this.name);
        }
    }
    person.sayMyName()
    // In Arrow function everythig changes using this means global context
    // => output: undefined
    
    const localSayMyName = person.sayMyName.bind(person);
    localSayMyName();
    // In Arrow function everythig changes using this means global context
    // => output: undefined

}
thisUsingArrowFunc()

console.log('\n*************using bind**************\n');

function callingfunc() {
    const person = {
        name: 'Rexa',
        sayMyName: function () {
            console.log('Say my name: ', this.name);
        }
    }
    person.sayMyName()

    const localSayMyName = person.sayMyName.bind(person);
    console.log('using bind: ', person.sayMyName.bind(person));
    localSayMyName();

}
callingfunc()