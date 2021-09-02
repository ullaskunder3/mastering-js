/*By convention the first typographic letter 
    unit of each word in titlecase(capital).
*/
class User {

    /**
     * first thing to do is creating constructor function.
     * Constructor() is a function which actually construct the object
     * 
     * ! Don't use , COMMAs after block {}
     */
    constructor(userName, userEmail) {
        this.userID = userName;
        this.emailID = userEmail;
        this.likes = 0
    }
    login() {
        console.log(`${this.userID}, You just logged in`);
        return this // this makes method chaining possible
    }
    logout() {
        console.log(`${this.userID}, You have been logged out`);
        return this // this makes method chaining possible
    }
    userActivity() {
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

class Developer extends User {
    constructor(userName, userEmail, badge) {
        /**
         * Since the super() operator is actually the parent class constructor,
         *  passing it the necessary arguments of the Parent class constructor
         *  will also initialize the parent class properties in our sub-class,
         *  thereby inheriting it:
         */
        super(userName, userEmail)
        this.badge = badge;
        this.likes = undefined;
    }

    filterOutUser(fakeUser) {
        users = users.filter(user => {
            return user.emailID != fakeUser.emailID
        })
    }
}

/**
 * The new Keyword 
 * - Creates a new empty object
 * - Adds a property to the new object (_proto_) that links to the constructor function's prototype object
 * - Binds the newly created object instance as the this context 
    * > userOne.username => this.username where this now points to userOne
 */
const userOne = new User('kingsMan', 'ullaskunder3@gmail.com');
const jrDev = new Developer('ullas', 'ullaskunder3@gmail.com', 'Junior');

const fake1 = new User('hacker', 'fakeID@gmail.com');
const fake2 = new User('noob', 'limeLight@gmail.com');

userOne.login()
// Example method Chaining
userOne.userActivity().userActivity()
console.log('Your post got', userOne.likes, 'likes');
userOne.logout()

console.log('\nDeveloper class extends User\n', jrDev);

let users = [userOne, fake1, fake2];
console.log('\nBefore applying filter user: ', users);

jrDev.filterOutUser(fake1)

console.log('\nAfter applying filter user: ', users);