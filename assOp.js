
// Create a variable called x and set its initial value to 5 -->

 //   let x = 5;
	

// Add 3 to the value of x using the + operator, and assign the new value (8) back to x -->
	let x = 5;
    x = x + 3;


// Add 2 to the value of x using the += operator, and assign the new value (10) back to x -->
	
    x += 2;

    // Appends output value of x to the HTML span element
    document.getElementById("output").innerHTML = x;

    // Add an event listener to the <span> element using <input> element
    const outputInput = document.querySelector('#output input');
    outputInput.addEventListener("input", function() {
        const newValue = outputInput.value;
        console.log("New value entered: " + newValue);
    });






//DETAILED EXPLANATIONS BELOW ARE FOR YOUTUBE TUTORIAL

/*In this updated code, I added an <input> tag inside the span element with an initial value of 10, which is the final value of x.
 I also added an event listener to the input field that listens for the input event, which is fired whenever the user enters a new value
  in the input field.

Inside the event listener function, I get the new value entered by the user using the value property of the input field, and log it to
 the console using the console.log() function. You can modify the code inside the event listener function to perform a different action 
 based on your requirements.

*/


//######################################################################
//SAMPLE CODE TO GAUGE UNDERSTANDING OF CONCEPT
// <p>The value of y is: <span id="entry"><input type="text" value=20></span></p>

 /* const entryInput = document.querySelector('#entry input');
    entryInput.addEventListener("input", function() {
        const newValue = entryInput.value;
        console.log("New value entered: " + newValue);
    });

    */