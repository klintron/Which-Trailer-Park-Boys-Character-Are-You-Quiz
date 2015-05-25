//This is a two axis personality test. The whole thing is called by the function findPersonality

function findPersonality() {

//Create a function to find grab the answers out of the form.

var getValue = function(name) {
     var Answer = document.getElementsByName(name);
     for (i = 0; i < Answer.length; i++) {
         if (Answer[i].checked) {
             return (Number(Answer[i].value))
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
 
if ( Lawfulness > 5 && Methodical > 5) {
	return "You are Mr. Lahey"}
else if ( Lawfulness > 1 && Methodical > 1 ) {
	return "You are Sarah"}
else if ( Lawfulness > -2 && Methodical > -3 ) {
	return "You are Bubbles"}
else if ( Lawfulness > 2 && Methodical > -3 ) {
	return "You are Randy"}			 
else if ( Lawfulness > 0 && Methodical > -6 ) {
	return "You are Lucy"}
else if ( Lawfulness < 0 && Methodical > 3 ) {
	return "You are Julian"}
else if (Lawfulness < 0 && Methodical < 4 ) {
	return "You are Jacob"}
else if (Lawfulness < 0 && Methodical > -2 ) {
	return "You are Ricky"}
else if (Lawfulness < 0 && Methodical <-4) {
	return "You are Corey"
}	 	 
	 else {return "You are Philadelphia Collins"};

};