// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable);

// 할당된 값에 따라 타입이 결정. 인터프린트 언어이기때문에 한줄한줄 읽으면서 할당된 값에 따라 타입이 변함. 반대로 컴파일언어는 컴파일전에int variable = 123 이렇게 타입을 먼저 지정해주어야함.
variable = 123; 
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');