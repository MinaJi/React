/* [const]
  constant(상수)를 뜻
    '항상 같은 수'
  변수(變數)인데 상수(常數)
  변치 않는 값을 갖는 변수
  - const로 선언한 변수는 값의 재할당 불가(X)
  - 반드시 선언과 동시에 값이 할당되어야
 */  

const PI = 3.141592;
console.log(`반지름이 10인 원의 넓이는 ${10**2*PI} 입니다.`);
// PI = 3.141; <- 재할당 불가

var sn;
sn = 'K2022-13';
console.log('SN:', sn);

// const SN;
// SN = 'K2022-13'; 
const SN = 'K2022-13'; // 선언과 동시에 값이 할당되어야한다.


/* [let]
 * 변수(變數)
 * 다른 값이 재할당 가능(O)
 */

let score ;
score = 100;
score = 200;

/*
var VS let
*/
var some = 104;
some = 1004;

//...................
//...................
//...................
//...................
//...................
//...................
//...................
//................... 6만 5천줄의 코딩......후

var some = '천사'; // <- 이것이 가능...?

// let score = 100; <-불가능
// score = 100 <- 가능

// var보다 let 을 사용하는것이 더 좋다....?!

/*
호이스팅 (Hoisting)
*/
// var odd;
//console.log(odd); // <- undefined

// console.log('odd=', odd);
// var odd = 1;
// console.log('odd=', odd); // 이것이 호이스팅..............

console.log('odd=', odd);

var odd;

hello();
function hello(){console.log("Say Hello~")}

// ....... 한편 let 에서는?
let level = 1;

console.log(level);

/*
변수 범위 (Scope): 프로그램 내에서 변수의 접근 수준
var : 함수형 변수(function-scope)
let : 영역형 변수(block-scope)
*/
var value = 10;

function levelUp()