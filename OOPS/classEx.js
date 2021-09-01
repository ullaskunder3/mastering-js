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
    }
    login(){
        console.log(`${this.userID}, You just logged in`);
    }
    logout(){
        console.log(`${this.userID}, You have been logged out`);
    }
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
userOne.logout()