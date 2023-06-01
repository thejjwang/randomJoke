let addJoke = document.getElementById('addJoke');
let gimmeJoke = document.getElementById('gimmeJoke');
let input = document.getElementById('input');
let h3 = document.querySelector('h3');
let masterJokes = {
    1: "I was wondering why the baseball was getting bigger. Then it hit me.",
    2: "Once you've seen one shopping center, you've seen the mall.",
    3: "I'm thinking of reasons to go to Switzerland. The flag is a big plus.",
}
// // button to just add the jokes to master list
addJoke.addEventListener("click", addToList);
//function to add the input values to the master list
function addToList(){
    let thing = (Object.keys(masterJokes).length +1);
    // Object.assign(masterJokes, {[thing]: input.value});
    masterJokes[thing] = input.value;
    input.value = "";
// input for user to enter joke 
}

// the actual button that creates random joke 
// gimmeJoke.addEventListener('click', createJoke);

// function createJoke(){
//     // creating an array of the values of the obj, which is each joke
//     let values = Object.values(masterJokes);
//     // return random joke
//     let randomValue = values[Math.floor(Math.random() * values.length)];
//     // set the h3 of the joke to the value of the random joke to display the joke
//     h3.innerHTML = randomValue;
// }
// refactor to show master list instead of showing one random joke
gimmeJoke.addEventListener('click', showList);
// change size of green box when button is clicked to size it better
let box = document.getElementById('thisJoke');

function showList(){
    h3.innerHTML = Object.values(masterJokes);
    box.style.height = '250px';
    box.style.width = '250px';
}