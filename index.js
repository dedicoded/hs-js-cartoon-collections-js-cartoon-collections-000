//["Doc", "Dopey", "Bashful", "Grumpy"]
function dwarfRollCall(dwarves) {
  let listDwarves = []
  for(let i = 0; i < dwarves.length; i++){
    
    listDwarves.push(`${i+1}. ${dwarves[i]} `)
    
  }
  return listDwarves.join(""); 
  
  //The join() method joins all elements of an array (or an array-like object) to string then it returns this string.

// "1. Doc 2. Dopey 3. Bashful 4. Grumpy "

//["earth", "wind", "fire", "water", "heart"]
function summonCaptainPlanet(planeteerCalls){
  let uppercasePlaneteerCalls = [];
  for(let i = 0; i < planeteerCalls.length; i++){
    let punctuation = "!"
    uppercasePlaneteerCalls.push(`${planeteerCalls[i]}${punctuation}`.toUpperCase())
  }
  return uppercasePlaneteerCalls
}
//["EARTH!", "WIND!", "FIRE!", "WATER!", "HEART!"]

//shortWords = ["wind", "fire"]
//assortedWords = ["earth", "wind", "heart", "fire"]
function longPlaneteerCalls(words) {
  
  for(let i = 0; i < words.length; i++){
    
    if(words[i].length>4){
      return true
    }
  }
  return false
}
//shortWords = ["wind", "fire"]
longPlaneteerCalls(short_words)
//false

assortedWords = ["earth", "wind", "heart", "fire"]
longPlaneteerCalls(assorted_words)
//#=> true


function findTheCheese (foods) {
  
  for (var i = 0; i < foods.length; i++) {
    
    if (foods[i] ===  'gouda'|| foods[i]===  'cheddar' || foods[i]==='camembert'|| foods[i]=== 'mozarella' ) {
      return foods[i];
    }
  }
  return 'no cheese!'
}
//BOB, Carol, Diane
function startsWithB(names)
 let listNames = []
 listNames.push(`${i+1}. ${names[i]} `)
 for (var i = 0; i < names.lenght; i++) {
    if (names[i].charAt(0) === 'b') 
    return names[i];
  
  
   
  
  }