function palindromo(word){
    for(index in word){
      if(word[index] != word[(word.length - 1) - index]){ //!= significa diferente 
        return false;
      }
    }
    return true;
  }

console.log(palindromo('hoje é ejoh'));
console.log(palindromo('desenvolvimento'));
