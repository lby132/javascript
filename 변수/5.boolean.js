let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

console.clear();
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isActivated);

console.clear();

//false
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// true
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});  // 빈 문자열은 true
console.log(!!Infinity);