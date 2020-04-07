//take in imput and send somthing liek a test back out
import { isYes } from './src/isYes.js';

//global Dom elements
const testButten = document.getElementById('startTest');

const resalt = document.getElementById('resalts');


// Initialization (setup, state variables)†


// Event Handlers
function runTest(){
    //varables from me 

    let name = ' ';
    let score = ' ';



    //starting allert
    alert("helo from me,");

     //get name 
    const firstName = prompt("What's your first name?");
    name = firstName;
    console.log(firstName);
     
    name = firstName;
 
    const lastName = prompt("What is your last name");
    name = name + ' ' + lastName;
    console.log(name);
 

    //ask if wants to cook 
    const cooking = confirm("do you want to cook my favorit resipy");
    if (cooking === false){
        return;
    }

    const ingredeants = confirm("do you have the ingredeants");
    if (ingredeants === false){
        return;
    }

    const instructions = confirm("Did you folow the instructions");
    if (instructions === false){
        return;
    } 

    const userAnswer = prompt('is it your favorit meal (yes/no)');
    const lowerUserAnswer = userAnswer.toLowerCase();

    const userIsCorrect = isYes(lowerUserAnswer);
    if (userIsCorrect === false){
        return;
    }

    score = name + "I will be good frinds";
    resalt.textContent = score;

}

testButten.addEventListener('click', runTest);


  // show the user a message. only options is 'OK'




   // returns: true for 'OK', and false for 'Cance+++