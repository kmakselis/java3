var skaiciuMasyvas = [100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27];
// min max reikšmės
const max = Math.max(...skaiciuMasyvas);
const min = Math.min(...skaiciuMasyvas);

// jei i mažesnis už i+1, i+1 keičiam į max
for (var i = 0; i < skaiciuMasyvas.length; i++) {
  if(skaiciuMasyvas[i] < skaiciuMasyvas[i+1]){
    skaiciuMasyvas[i+1] = max;
  }
}

// suma
const sum = skaiciuMasyvas.reduce(add,0);
function add(accumulator, a) {
    return accumulator + a;
}

// vidurkis
let count = 0;
let total = 0;

for(let i = 0; i < skaiciuMasyvas.length; i++){
  if(skaiciuMasyvas[i] !==undefined){
    count++;
    total += skaiciuMasyvas[i];
  }
}
let avg = total / count;

console.log("Skaičių suma: " + sum.toFixed(0));
console.log("Skaičių vidurkis: " + avg.toFixed(0));
console.log("Didžiausias skaičius: " + max.toFixed(0));
console.log("Mažiausias skaičius: " + min.toFixed(0));
