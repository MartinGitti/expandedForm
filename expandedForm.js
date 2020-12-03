/************************************************************CODING CHALLENGE*******************************************************************/

// I've decided to use the first "take home test" challenge out of the 4 provided=>
// I chose JavaScript as my coding langauge to solve this challenge.

/*
Purpose of challense: a whole number greater than 0 is passed in and the numbers are returned in their expanded form.
The function is expected to seperate each digit into their own place value eg. ones, tens, houndreds etc.
& to return the expected output into a string.

Example: 
* Call on the function that I created below: expandedForm(),
* Input a whole number or integer greater than 0.
* Let's go with a sample of expandedForm(234675).
* Test/run the function in the terminal.
* Output should be returned as a string => "" |or| ''.
* Expected string output: "200000 + 30000 + 4000 + 600 + 70 + 5".

Place values of 234675 would be as follows:
234675 => {2 hundred thousands + 3 ten thousands + 4 thousands + 6 hundreds + 7 tens + 5 one's}
*/

// Declare a function with an appropriate name using camel notation 
// + pass in a parameter as a placeholder. I've used 'int' short for integer:
expandedForm = (int) => {
    // Set some variables for this function:
    let intArr = []; // Create an empty array which will be used to push expanded numbers into.
    let intStr = int.toString(); // Convert the numeric value(number) of the paremeter into a string.
    // as per the task instruction & to iterate through each number.
    // Create a for loop which will run through the length of the string:
    for (let i = 0; i < intStr.length; i++) { // Set parameters for the for loop, limit the loop to that of the string.
        // Create the next set of local scope variables valid for the for loop.
        let zeroDigits = [intStr.length - i] - 1; // This variable accounts for the zero's needed for the expansion of each number.
        // Above,we also subtract the index of the character 'i' as well as '1' so that the current character isn't included.
        let y = 0; // Assign a value of zero to the y variable to keep track of the zero's used in the while loop below.
        let int = intStr[i]; // Create a variable that with replace the current number with a value of 'zero' as a place holder.

        if (intStr[i] !== "0") { // If statement to prevent unnecessary "0's" from being added. 
            while (y < zeroDigits) { // While loop is used to add 0's to the current character as long as the condition is met.
                int = int + "0"; // Only add to the 'intArr' variable if the current character isn't 0.
                y++; // Increment to do this for every character that follows.
            }
            intArr.push(int); // Push the items into the empty array that was created above with the push() method.
        }
    }
    return intArr.join(" + "); // Join() method used to combine all the items of the array together with the 'add' operather in between each item in the string.
}

/*
I did not use the browser to test my function, instead I made use of node.js to test it within my text editior: 'Visual Studio Code'.
To test the function, I've simply used 'node expandedForm.js' in the terminal to run/test the .js file
to display the ouput in the console using 'console.log()'.
*/
console.log(expandedForm(234675)); //Random sample used to test the above function.
//Expected output should be: "200000 + 30000 + 4000 + 600 + 70 + 5".

/************************************************************THE END*******************************************************************/
