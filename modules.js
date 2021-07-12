import { getDate, year as currentYear} from "./utils/date.js";

class App{
    constructor(){
        this.render();
    }
    render(){
        document.getElementById('root').innerHTML = 
        `
        <div>date: ${getDate()}</div>
        <div>year: ${currentYear}</div>
        `   
    }
}
new App();