/* This is not working
  *  const button = document.getElementsByTagName('button')[0]
  *  const counter = {
  *    cnt: 0,
  *    inc: function() {
  *      console.log('test');
  *      cnt++;
  *      console.log(this.cnt);
  *    }
  *  };
  * button.addEventListener('click', counter.inc(), false) 
**/

// solutions

//using bind
/* const button = document.getElementsByTagName('button')[0]
const counter = {
  cnt: 0,
  inc: function() {
    console.log('test');
    this.cnt++;
    console.log(this.cnt);
  }
};
button.addEventListener('click', counter.inc.bind(counter), false) */


//without bind but self reference
const button = document.getElementsByTagName('button')[0]
const counter = {
  cnt: 0,
  inc: function() {
    let selfRef = this;
    return function() {
      console.log('test');
      selfRef.cnt++;
      console.log(selfRef.cnt);
    }
  }
};
button.addEventListener('click', counter.inc(), false)
