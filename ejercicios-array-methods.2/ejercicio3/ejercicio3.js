"use strict";
function filterWords(phrase) {
    
    let wordsArray = phrase.split(' ');
    
    let filteredWords = wordsArray.filter(word => word.length > 3);
    
    
    return filteredWords;
  }
  
  
  let phrase = "carrera de desarrollo de software";
  
  let longWords = filterWords(phrase);
  
  
  alert('Palabras con más de 3 letras: ' + longWords.join(', '));
  