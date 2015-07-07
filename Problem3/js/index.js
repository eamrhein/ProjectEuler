function primeFactors(num){
  var factors = [];
  var divisor = 2;
  while (num >1){
    while(num % divisor == 0){
      factors.push(divisor);
      num /= divisor;
      console.log(num);
    };
    divisor = divisor +1;
  };
  return factors;
};

var answer = primeFactors(600851475143);
var P = answer.length;

document.getElementById('content').innerHTML = JSON.stringify(answer[(P-1)], null, 4);