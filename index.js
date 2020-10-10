function dwarfRollCall(dwarves) {
  let listDwarves = []
  for(let i = 0; i < dwarves.length; i++){
    
    listDwarves.push(`${i+1}. ${dwarves[i]} `)
    
  }
  return listDwarves.join(""); //The join() method joins all elements of an array (or an array-like object) into a string and returns this string.
}


function summonCaptainPlanet(planeteerCalls){
  let uppercasePlaneteerCalls = [];
  for(let i = 0; i < planeteerCalls.length; i++){
    let punctuation = "!"
    uppercasePlaneteerCalls.push(`${planeteerCalls[i]}${punctuation}`.toUpperCase())
  }
  return uppercasePlaneteerCalls
}



function longPlaneteerCalls(words) {
  
  for(let i = 0; i < words.length; i++){
    
    if(words[i].length>4){
      return true
    }
  }
  return false
}



function findTheCheese (foods) {
  
  for (var i = 0; i < foods.length; i++) {
    
    if (foods[i] ===  'gouda'|| foods[i]===  'cheddar' || foods[i]==='camembert') {
      return foods[i];
    }
  }
  return 'no cheese!'
}