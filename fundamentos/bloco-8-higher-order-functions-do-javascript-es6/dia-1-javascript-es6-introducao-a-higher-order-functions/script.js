const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.group);

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator());

// Fixação

const wakeUp = () => 'Acordando!!';
const toCofee = () => 'Bora tomar café!!';
const toSleep = () => 'Partiu cama!!';

const doingThings = (callback) => {
  const result = callback();
  console.log(result);
}

doingThings(wakeUp);
doingThings(toCofee);
doingThings(toSleep);
console.log(`${wakeUp} Começou o dia! ${toCofee} Para ficar ligadão?!`);