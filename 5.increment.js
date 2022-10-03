// 증가 감소 연산자
let a = 0;
console.log(a);

a++;
console.log(a);
a--;
console.log(a);

console.clear();
//a++ 필요한 연산을 하고 그 뒤 값을 증가시킴
//++a 값을 먼저 증가하고 필요한 연산을 함
a = 0;
console.log(a++); // log에 출력되는 연산이 먼저 일어나기 때문에 값은 나중에 증가시킴
console.log(b); 
console.log(a);
let b = a++;    // 할당연산이 먼저 일어나기 때문에 값은 나중에 증가시킴
console.log(b); 
console.log(a);
