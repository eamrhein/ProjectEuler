
var array = [];
  for (i=1; i<1000; i++){
   if (i % 3 == 0 || i%5==0 ){
       array.push(i);
       console.log(i);
       };
  };
 var sum = array.reduce(function(a,b){
    return a + b;
  });
  console.log(sum);
  
  document.getElementById('content').innerHTML = JSON.stringify(sum, null, 4);

