/*By convention the first typographic letter 
    unit of each word in titlecase(capital).
*/
class User{

    /**
     * first thing to do is creating constructor function.
     * Constructor() is a function which actually construct the object
     * 
     * ! Don't use , COMMAs after block {}
     */ 
    constructor(userName, userEmail){
        this.userID = userName;
        this.emailID = userEmail;
        this.likes = 0
    }
    login(){
        console.log(`${this.userID}, You just logged in`);
        return this // this makes method chaining possible
    }
    logout(){
        console.log(`${this.userID}, You have been logged out`);
        return this // this makes method chaining possible
    }
    userActivity(){
        this.likes++;
        console.log(`${this.userID}, your post just got like`);
        return this // this makes method chaining possible
    }

    /**
     * In the code above, 
     * The function method returns the current executing context back from the function call.
     * The next function then executes on this context => referring to the same object,
     *  and invokes the other functions associated with the object.
     */
}

/**
 * The new Keyword 
 * - Creates a new empty object
 * - Adds a property to the new object (__proto__) that links to the constructor function's prototype object
 * - Binds the newly created object instance as the this context 
    * > userOne.username => this.username where this now points to userOne
 */
const userOne = new User('ullas', 'ullaskunder3@gmail.com');

userOne.login()

// Method Chaining
userOne.userActivity().userActivity()

console.log('Your post got',userOne.likes,'likes');
userOne.logout()