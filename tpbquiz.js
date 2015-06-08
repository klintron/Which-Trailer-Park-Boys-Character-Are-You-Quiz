//This is a two axis personality test. The whole thing is called by the function findPersonality

"use strict";

function findPersonality() {

//Check to make sure all the questions have been answered

    var checkComplete = function (name) {
        var Complete = document.getElementsByName(name);
        var i;
        for (i = 0; i < Complete.length; i++) {
            if (Complete[i].checked === true) {
                return (1);
            }
            else {
                return (0);
            }
        }
    };

var checkQuestion1 = checkComplete('Question1');
var checkQuestion2 = checkComplete('Question2');
var checkQuestion3 = checkComplete('Question3');
var checkQuestion4 = checkComplete('Question4');
var checkQuestion5 = checkComplete('Question5');
var checkQuestion6 = checkComplete('Question6');

//Create a function to get the answers from the form

var getValue = function (name) {
    var Answer = document.getElementsByName(name);
    var i;
    for (i = 0; i < Answer.length; i++) {
        if (Answer[i].checked) {
            return (Number(Answer[i].value));
        }
     }
};

//Use the getValue function to populate variables with the responses from the form.

var Answer1 = getValue('Question1');
var Answer2 = getValue('Question2');
var Answer3 = getValue('Question3');
var Answer4 = getValue('Question4');
var Answer5 = getValue('Question5');
var Answer6 = getValue('Question6');

//Tally the score for each axis.

var Lawfulness = Answer1 + Answer3 + Answer5;
var Methodical = Answer2 + Answer4 + Answer6;

//Determine which character matches up with the scores.

if (checkQuestion1 === 0) {
    return "Please answer all the questions!";
    }
else if (checkQuestion2 === 0) {
    return "Please answer all the questions!";
    }
else if (checkQuestion3 === 0) {
    return "Please answer all the questions!";
    }
else if (checkQuestion4 === 0) {
    return "Please answer all the questions!";
    }
else if (checkQuestion5 === 0) {
    return "Please answer all the questions!";
    }
else if (checkQuestion6 === 0) {
    return "Please answer all the questions!";
    }
else if ( Lawfulness > 3 && Methodical > 3) {
    return "You are Mr. Lahey";
    }
else if ( Lawfulness > 2 && Methodical < 0) {
    return "You are Randy";
    }
else if ( Lawfulness > 1 && Methodical > 0 ) {
    return "You are Sarah";
    }
else if ( Lawfulness < 1 && Methodical > 3 ) {
    return "You are Julian";
    }
else if ( Lawfulness > -2 && Methodical > -4 ) {
    return "You are Bubbles";
    }
else if ( Lawfulness > -1) {
    return "You are Lucy";
    }
else if (Lawfulness < 1 && Methodical > -1 ) {
    return "You are Jacob";
    }
else if (Lawfulness >-5) {
    return "You are Ricky";
    }
else if (Lawfulness < 0) {
    return "You are Corey";
    }
else {
    return "You are Philadelphia Collins!";
    }
}