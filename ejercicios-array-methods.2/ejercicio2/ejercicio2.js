function countWords(phrase) {
    
    let wordsArray = phrase.split('  ');
    
    return wordsArray.length;
  }
  
  let phrase = 'La programación web es fundamental para el progreso';
  
  
  let wordCount = countWords(phrase);
  
 
  alert('La frase tiene ' + wordCount + ' palabras.');
  