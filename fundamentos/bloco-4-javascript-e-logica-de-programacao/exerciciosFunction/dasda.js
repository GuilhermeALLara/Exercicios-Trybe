
function concatName(array) {
    let arraySize = array.length;
    let textFirst = array[0];
    let textLast = array[arraySize - 1];
    let concatArray = textLast.concat(", ", textFirst);
    return concatArray;
  }
  console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paollilo']));