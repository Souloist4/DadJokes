
let dadJokes = ["(country man voice) what do you call a deer with no eyes?", 
    "What do mermaids wash their FIN's with?", 
    "Want to here a joke about pizza?", 
    "Have you heard of the movie constitpation?", 
    "Why didnt the alligator go out to party after work?", 
    "What did they call it when the Wine economy had its worst recession?", 
    "What kind of car does a GHOST drive?"];


let wittyRemarks = ["(in a Contry Man  voice) I have no I Deer", 
    "Tide", 
    "Nevermind it might be cheesy", 
    "Don't worry it hasn't came out yet", 
    "It was SWAMPED", 
    "The Grape Depression", 
    "A Booo-ick"];





function multiMessages(){
   const random = Math.floor(Math.random()* dadJokes.length);

  let dailyJoke = dadJokes[random];
  let dailyJokesRemarks = wittyRemarks[random];   
    
   console.log(`lets go team, Dad Jokes!!!`);
   console.log(`Todays joke: ${dailyJoke}`);
   console.log(`The answer is: ${dailyJokesRemarks} ^_^`);
   console.log('Have a good time!!');
   
}

multiMessages();

